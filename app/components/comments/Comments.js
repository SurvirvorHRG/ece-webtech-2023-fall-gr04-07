"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'



const Comments = ({ articleSlug }) => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const supabase = useSupabaseClient()
  //const [message, setMessage] = useState(null)
  const user = useUser()
  const router = useRouter()
  useEffect(() => {
    (async () => {
      const response = await fetch(`https://ece-webtech-2023-fall-gr04-07.vercel.app/api/comments?articleSlug=${articleSlug}`)
      const comments = await response.json()
      setData(comments)
      setLoading(false)
    })()
  }, [supabase])




  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, articleSlug }),
    });
    router.reload()
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {user ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data?.map((item) => (
              <div className={styles.comment} key={item._id}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item.user.name}</span>
                    <span className={styles.date}>{item.user.email}</span>
                    <span className={styles.date}>{item.created_at}</span>
                  </div>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;