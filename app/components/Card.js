import Image from "next/image";
import Link from "next/link";

const styles = {
  container:"mb-[50px] flex items-center gap-[50px]",
  imageContainer:"flex-[1] h-[350px] relative table lg:block",
  image:"object-cover",
  textContainer:"flex-[1] flex flex-col gap-[30px]",
  date:"text-[gray]",
  category:"text-[crimson] font-medium",
  desc:"text-[18px] font-light",
  link:"border-b-[1px_solid_crimson] w-max px-0 py-[2px]"
}

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      {item.image && (
        <div className={styles.imageContainer}>
          <Image src={item.image} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.created_at.substring(0, 16).replace('T',' ')} -{" "}
          </span>
          <span className={styles.category}>{item.cat_slug}</span>
        </div>
        <Link href={`/articles/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,300) +"[...]" }}/>
        <Link href={`/articles/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
