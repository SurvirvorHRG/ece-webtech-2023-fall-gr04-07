import Layout from '../../components/Layout.js'
import Menu from "@/components/Menu";
import Image from "next/image";
import Comments from "../../components/Comments.js";
import {server} from '../../config/config.js'

const styles = {
  infoContainer:"flex items-center gap-[50px]",
  textContainer: "flex-[1]",
  title: "text-[36px] sm:text-[48px] xl:text-[54px] 2xl:text-[64px] mb-[50px]",
  user:"flex items-center gap-[20px]",
  userImageContainer:"w-[50px] h-[50px] relative",
  avatar: "rounded-[50%] object-cover",
  userTextContainer:"flex flex-col gap-[5px]",
  username:"text-[20px] font-medium",
  imageContainer:"hidden lg:block flex-[1] h-[350px] relative",
  image:"object-cover",
  content:"flex gap-[50px]",
  post:"flex-[5] mt-[60px]",
  description:"text-[18px] sm:text-[20px] font-light mb-[20px]",

}

export const getServerSideProps = async (ctx) => {

  const response = await fetch(`${server}/api/articles/${ctx.params.slug}`)
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
              <span className={styles.username}>{data?.user.email}</span>
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
            <Comments article_slug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
    </Layout>
  );
};

export default SinglePage;