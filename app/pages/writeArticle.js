"use client"
import Image from "next/image"
import { useEffect, useState, useMemo } from "react"
import "react-quill/dist/quill.bubble.css"
import dynamic from 'next/dynamic'
import Layout from '../components/Layout.js'
import { useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { v4 as uuidv4 } from 'uuid'


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
    publish: "absolute top-0 right-0 px-[20px] py-[10px] border-[none] bg-[#1a8917] text-[white] cursor-pointer rounded-[20px]",
    loading: "",
    imageContainer: "grid lg:block flex-[1] h-[350px] absolute right-20 top-[x]",
}


export default function WriteArticle() {

    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), [])
    const supabase = useSupabaseClient()
    const router = useRouter()
    const user = useUser()

    const [open, setOpen] = useState(false)
    const [file, setFile] = useState(null)
    const [media, setMedia] = useState("")
    const [value, setValue] = useState("")
    const [title, setTitle] = useState("")
    const [catSlug, setCatSlug] = useState("")

    useEffect(() => {
        const upload = async () => {
            const uuidv4_img = uuidv4()

            const { data, error } = await supabase
              .storage
              .from('images')
              .upload(user.id + "/" + uuidv4_img, file)
        
            if (data) {
              setMedia(`https://vdtyfskrdjugcgkeuvqy.supabase.co/storage/v1/object/public/images/${user.id}/${uuidv4_img}`)
        
            } else {
              console.log(error);
            }
        }

        file && upload()
    }, [file])

    if (user === "loading") {
        return <div className={styles.loading}>Loading...</div>
    }

    if (!user) {
        router.push("/")
    }

    const slugify = (str) =>
        str
            .toString()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')

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
        })

        if (res.status === 200) {
            const data = await res.json();
            router.push(`/articles/${data.slug}`)
        }
    }

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
                <button className={styles.publish} onClick={handleSubmit}>
                    Publish
                </button>
            </div>
        </Layout>
    )
}
