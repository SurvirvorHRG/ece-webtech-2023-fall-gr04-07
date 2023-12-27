import Layout from '../../components/Layout.js'
import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "../../components/comments/Comments.js";

export const getServerSideProps = async (ctx) => {

  const response = await fetch(`https://ece-webtech-2023-fall-gr04-07.vercel.app/api/articles/${ctx.params.slug}`)
  const slug = await response.json()

  return {
    props: {
      data: slug,
      articleSlug: ctx.params.slug
    }
  }
}

const SinglePage = (props) => {

  const data = props.data;
  const slug = props.articleSlug

  return (
    <Layout
    title="Article"
    description="Single article"
    >
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image src={data.user.image} alt="" fill className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>{data.created_at}</span>
            </div>
          </div>
        </div>
        {data?.image && (
          <div className={styles.imageContainer}>
            <Image src={data.image} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.comment}>
            <Comments articleSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
    </Layout>
  );
};

export default SinglePage;