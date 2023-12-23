"use client"
import Image from "next/image"
import { useState,useMemo } from "react"
import "react-quill/dist/quill.bubble.css"
import styles from "./writePage.module.css"
import dynamic from 'next/dynamic'
import Layout from '../components/Layout.js'


export default function WriteArticle() {
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(false)

    return (
        <Layout>
            <div className={styles.container}>
                <input type="text" placeholder="Title" className={styles.input} />
                <div className={styles.editor}>
                    <button className={styles.button} onClick={() => setOpen(!open)}>
                        <Image src="/plus.png" alt="" width={16} height={16} />
                    </button>
                    {open && (
                        <div className={styles.add}>
                            <button className={styles.addButton}>
                                <Image src="/image.png" alt="" width={16} height={16} />
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
                        placeholder="Write your article..."
                    />
                </div>
                <button className={styles.publish}>Publish</button>
            </div>
        </Layout>
    )
}