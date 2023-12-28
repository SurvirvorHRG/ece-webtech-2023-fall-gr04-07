import React from "react";
//import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "./MenuPosts";
import MenuCategories from "./MenuCategories";


const styles = {
  container: "flex-[2] mt-[60px] hidden lg:block",
  subtitle: "text-[gray] text-[16px] font-normal",
  title: "text-[28px]",
}

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
    </div>
  );
};

export default Menu;