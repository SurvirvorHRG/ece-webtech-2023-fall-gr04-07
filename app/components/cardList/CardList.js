import React from "react"
import styles from "./cardList.module.css"
import Pagination from "../pagination/Pagination"
import Image from "next/image"
import Card from "../card/Card"


export default function CardList(props){
  const page = 1
  const count = 1
 let posts = props.data

 let h = JSON.stringify({ posts })

 var size = Object.keys(posts).length;
 console.log(size)


  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div>
      {posts &&(
        <div>
        {posts.map( post=> (<h1>{post.count}</h1>))}
        </div>
      )}
    </div>
    /*<div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>*/
  )
}