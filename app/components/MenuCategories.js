import Link from "next/link";
import React from "react";
//import styles from "./menuCategories.module.css";

const styles ={
  categoryList:"mt-[35px] mb-[60px] flex flex-wrap gap-[20px]",
  categoryItem:"px-[25px] py-[10px] rounded-[10px] text-[14px]",
  style:"bg-[#57c4ff31]",
  fashion:"bg-[#da85c731]",
  food:"bg-[#7fb88133]",
  travel:"bg-[#ff795736]",
  culture:"bg-[#ffb04f45]",
  coding:"bg-[#5e4fff31]"
}

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/articles?search=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Style
      </Link>
      <Link href="/articles?search=fashion" className={`${styles.categoryItem} ${styles.fashion}`}>
        Fashion
      </Link>
      <Link href="/articles?search=food" className={`${styles.categoryItem} ${styles.food}`}>
        Food
      </Link>
      <Link href="/articles?search=travel" className={`${styles.categoryItem} ${styles.travel}`}>
        Travel
      </Link>
      <Link href="/articles?search=culture" className={`${styles.categoryItem} ${styles.culture}`}>
        Culture
      </Link>
      <Link href="/articles?search=coding" className={`${styles.categoryItem} ${styles.coding}`}>
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;