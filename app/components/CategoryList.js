import React from "react"
import Link from "next/link"
import Image from "next/image"

const styles = {
  container:"",
  title:"mx-0 my-[50px]",
  categories:"flex flex-wrap justify-between gap-[20px]",
  category:"flex items-center gap-[10px] capitalize w-full sm:w-[45%] md:w-1/4 lg:w-[1/5] xl:w-[15%]  h-[80px] justify-center rounded-[10px]",
  style:"bg-[#57c4ff31]",
  fashion:"bg-[#da85c731]",
  food:"bg-[#7fb88133]",
  travel:"bg-[#ff795736]",
  culture:"bg-[#ffb04f45]",
  coding:"bg-[#5e4fff31]",
  image: "rounded-[50%]"
}

const CategoryList = (props) => {
  const data = props.categories
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/articles?search=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item.id}
          >
            {item.image && (
              <Image
                src={item.image}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default CategoryList;
