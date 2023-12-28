import React from "react";
import Pagination from "./Pagination";
import Card from "./Card";

const styles = {
  container:"flex-[5]",
  title:"mx-0 my-[50px]"
}

const CardList = (props) => {

  const posts = props.articles.data
  const count = props.articles.count
  const page = props.page

  const POST_PER_PAGE = 4;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Articles</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <Pagination page={page} search={props.search} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;