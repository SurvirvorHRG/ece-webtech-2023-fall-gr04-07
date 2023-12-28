"use client"
import Image from "next/image"
import { useEffect,useState, useMemo } from "react"
import "react-quill/dist/quill.bubble.css"
import dynamic from 'next/dynamic'
import Layout from '../components/Layout.js'
import { useUser} from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

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
    editor:"flex gap-5 h-[700px] relative",
    button:"w-9 h-9 bg-transparent border border-[color:var(--textColor)] flex items-center justify-center cursor-pointer rounded-[50%] border-solid border-[#1a8917]",
    addButton: "w-9 h-9 bg-transparent border border-[color:var(--textColor)] flex items-center justify-center cursor-pointer rounded-[50%] border-solid border-[#1a8917]",
    add: "flex gap-5 bg-[color:var(--bg)] absolute z-[999] w-full left-[50px]",
    input:"p-[50px] text-[64px] border-[none] outline-[none] bg-transparent",
    input_placeholder:"text-[#b3b3b1]",
    textArea:" w-full",
    publish:"absolute top-0 right-0 px-[20px] py-[10px] border-[none] bg-[#1a8917] text-[white] cursor-pointer rounded-[20px]",
    loading:""
}


export default function WriteArticle() {

    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);
    //const { status } = useSession();
    const router = useRouter();
    const user = useUser()

    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("");

    useEffect(() => {
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

    if (user === "loading") {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (!user) {
        router.push("/");
    }

    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

    const handleSubmit = async () => {
        const res = await fetch("/api/articles", {
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

    return (
        <Layout
        title="Write"
        description="Write your article"
      >
        <div className={styles.container}>
            <input
                type="text"
                placeholder="Title"
                className={styles.input}
                onChange={(e) => setTitle(e.target.value)}
            />
            <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
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
                <ReactQuill
                    className={styles.textArea}
                    theme="bubble"
                    value={value}
                    onChange={setValue}
                    placeholder="Tell your story..."
                />
            </div>
            <button className={styles.publish} onClick={handleSubmit}>
                Publish
            </button>
        </div>
        </Layout>
    );
};
