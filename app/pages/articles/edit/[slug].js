"use client"
import Image from "next/image"
import { useEffect, useRef, useState, useMemo } from "react"
import "react-quill/dist/quill.bubble.css"
import dynamic from 'next/dynamic'
import Layout from "@/components/Layout"
import { useRouter } from 'next/router'
import { server } from "@/config/config"
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'

import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";

const styles = {
    container: "relative flex flex-col",
    select: "bg-[silver] w-max ml-[50px] mb-[50px] px-5 py-2.5",
    editor: "flex gap-5 h-[700px] relative",
    button: "w-9 h-9 bg-transparent border border-[color:var(--textColor)] flex items-center justify-center cursor-pointer rounded-[50%] border-solid border-[#1a8917]",
    addButton: "w-9 h-9 bg-transparent border border-[color:var(--textColor)] flex items-center justify-center cursor-pointer rounded-[50%] border-solid border-[#1a8917]",
    add: "flex gap-5 bg-[color:var(--bg)] absolute z-[999] w-full left-[50px]",
    input: "p-[50px] text-[64px] border-[none] outline-[none] bg-transparent",
    input_placeholder: "text-[#b3b3b1]",
    textArea: " w-full",
    edit: "absolute top-0 right-0 px-[20px] py-[10px] border-[none] bg-[#1a8917] text-[white] cursor-pointer rounded-[20px]",
    remove: "absolute top-0 right-[10] px-[20px] py-[10px] border-[none] bg-red-700 text-[white] cursor-pointer rounded-[20px]",
    loading: "",
    imageContainer: "grid lg:block flex-[1] h-[350px] absolute right-20 top-[x]",
}

export const getServerSideProps = async (ctx) => {
    // Create authenticated Supabase Client
    const supabase = createPagesServerClient(ctx)
    // Check if we have a session
    const {
        data: { session },
    } = await supabase.auth.getSession()


    const { data } = await supabase
        .from('article')
        .select('user_email')
        .eq('slug', ctx.params.slug)
        .single()

    if (!session || data.user_email != session.user.email)
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }

    return {
        props: {
            article_slug: ctx.params.slug,
            user: session
        }
    }
}


export default function EditArticle(props) {

    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);
    const router = useRouter();
    //const user = props.user
    const initialRender = useRef(true)

    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("");

    useEffect(() => {

        if (initialRender.current) {
            initialRender.current = true
            const fetchData = async () => {
                const response = await fetch(`${server}/api/articles/${props.article_slug}`)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const result = await response.json()

                setTitle(result.title)
                setMedia(result.image)
                setCatSlug(result.cat_slug)
                setValue(result.desc)
            }
            fetchData().catch((e) => {
                // handle the error as needed
                console.error('An error occurred while fetching the data: ', e)
            })
            return
        }


        const storage = getStorage(app);
        const upload = () => {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                    }
                },
                (error) => { },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMedia(downloadURL);
                    });
                }
            );
        };

        file && upload();
    }, [file]);

    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

    const handleEdit = async () => {
        const res = await fetch(`/api/articles/edit/${props.article_slug}`, {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                image: media,
                slug: slugify(title),
                cat_slug: catSlug || "style", //If not selected, choose the general category
            }),
        });

        if (res.status === 200) {
            const data = await res.json();
            router.push(`/articles/${data.slug}`);
        }
    };

    const handleRemove = async () => {
        const res = await fetch(`/api/articles/edit/${props.article_slug}?delete=true`, {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                image: media,
                slug: slugify(title),
                cat_slug: catSlug || "style", //If not selected, choose the general category
            }),
        });

        if (res.status === 200) {
            const data = await res.json();
            router.push(`/`);
        }
    };

    return (
        <Layout
            title="Write"
            description="Write your article"
        >
            <div className={styles.container}>
                <input
                    type="text"
                    value={title}
                    className={styles.input}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
                    <option value="" selected disabled hidden>{catSlug}</option>
                    <option value="style">style</option>
                    <option value="fashion">fashion</option>
                    <option value="food">food</option>
                    <option value="culture">culture</option>
                    <option value="travel">travel</option>
                    <option value="coding">coding</option>
                </select>
                <div className={styles.editor}>
                    <button className={styles.button} onClick={() => setOpen(!open)}>
                        <Image src="/plus.png" alt="" width={16} height={16} />
                    </button>
                    {open && (
                        <div className={styles.add}>
                            <input
                                type="file"
                                id="image"
                                onChange={(e) => setFile(e.target.files[0])}
                                style={{ display: "none" }}
                            />
                            <button className={styles.addButton}>
                                <label htmlFor="image">
                                    <Image src="/image.png" alt="" width={16} height={16} />
                                </label>
                            </button>
                            <button className={styles.addButton}>
                                <Image src="/external.png" alt="" width={16} height={16} />
                            </button>
                            <button className={styles.addButton}>
                                <Image src="/video.png" alt="" width={16} height={16} />
                            </button>
                        </div>
                    )}
                    {media && (
                        <div className={styles.imageContainer}>
                            <Image src={media} alt="" width={350} height={350} className={styles.image} />
                        </div>
                    )}
                    <ReactQuill
                        className={styles.textArea}
                        theme="bubble"
                        value={value}
                        onChange={setValue}
                        placeholder="Tell your story..."
                    />
                </div>
                <button className={styles.edit} onClick={handleEdit}>
                    Edit
                </button>
                <button className={styles.remove} onClick={handleRemove}>
                    Remove
                </button>
            </div>
        </Layout>
    );
};
