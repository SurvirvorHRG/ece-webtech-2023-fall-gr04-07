import React from "react";
import Image from "next/image";
import Link from "next/link";

const styles = {
  container: "mt-[50px] px-0 py-[20px] flex items-center justify-between gap-[50px] md:gap-0 flex-col md:flex-row",
  info: "flex-[1] flex flex-col gap-[14px]",
  logo: "flex items-center gap-[10px]",
  logoText: "text-[24px]",
  desc:"font-light",
  icons:"mt-[10px] flex gap-[10px]",
  links:"flex-[1] flex justify-end text-[14px] sm:text-[16px] gap-[50px] lg:gap-[100px] w-full md:w-auto justify-between md:justify-end",
  list:"flex flex-col gap-[10px] font-light",
  listTitle:"font-bold"
}

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="https://avatars.githubusercontent.com/u/49885447?v=4" alt="SurvirvorHRG" width={50} height={50} />
          <h1 className={styles.logoText}>SurvirvorHRG/Erwan</h1>
        </div>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;