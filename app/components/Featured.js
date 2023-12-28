import React from "react";
import Image from "next/image"


const styles = {
  container:"mt-[30px]",
  title:"text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[96px] font-light",
  post:"mt-[60px] flex items-center gap-[50px]",
  imgContainer:"flex-[1] h-[500px] relative hidden lg:block",
  image:"object-cover",
  textContainer:"flex-[1] flex flex-col gap-[20px]",
  postTitle:"text-[40px]",
  postDesc:"text-[20px] font-light",
  button:"px-[20px] py-[16px] border-[none] rounded-[5px] w-max"
}

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey !</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;