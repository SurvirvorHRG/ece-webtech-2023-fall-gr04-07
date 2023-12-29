"use client";

import Link from "next/link";
import Image from "next/image";
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {server} from "../config/config"
import { getUserAvatarURL } from "@/utils/gravatar";

const styles = {
  container:"mt-[50px]",
  title:"mb-[30px]",
  write:"flex items-center justify-between gap-[30px]",
  input:"bg-[lightslategray] p-[20px] w-full",
  button:"px-[20px] py-[16px] bg-[teal] text-[white] font-bold border-[none] rounded-[5px] cursor-pointer",
  comments:"mt-[50px]",
  comment:"mb-[50px]",
  user:"flex items-center gap-[20px] mb-[20px]",
  image:"rounded-[50%] object-cover",
  userInfo:"flex flex-col gap-[5px]",
  username:"font-medium",
  date:"text-[14px]",
  desc:"text-[18px] font-light"
}



const Comments = ({ article_slug }) => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const supabase = useSupabaseClient()
  //const [message, setMessage] = useState(null)
  const user = useUser()
  const router = useRouter()
  useEffect(() => {
    (async () => {
      const response = await fetch(`${server}/api/comments?articleSlug=${article_slug}`)
      const comments = await response.json()
      setData(comments)
      setLoading(false)
    })()
  }, [supabase])




  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, article_slug }),
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
                  {item?.user?  (
                    <Image
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  ):(
                    <Image src={getUserAvatarURL(item.user_email, 2048)} width={50} height={50} alt="" fclassName={styles.image} />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item.user?.name}</span>
                    <span className={styles.date}>{item.user_email}</span>
                    <span className={styles.date}>{item.created_at.substring(0, 16).replace('T',' ')}</span>
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