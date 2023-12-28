import Link from 'next/link'
import Image from 'next/image'
import OutlineUserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon'
import ThemeToggle from "./Theme/ThemeToggle.js"
import AuthLinks from './AuthLink'

const styles = {
  container:"flex items-center justify-between h-[100px]",
  social:"gap-[10px] flex-[1] hidden lg:flex",
  logo:"flex-[1] text-center text-left lg:text-center text-[24px] md:text-[32px] xl:text-[36px] font-bold",
  links: "flex items-center gap-[15px] text-[18px] xl:gap-[20px] flex-[1] xl:text-[20px] justify-end sm:justify-start",
  link: "hidden sm:flex "
}

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>WebTechApp</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/articles" className={styles.link}>Articles</Link>
        <Link href="/contacts" className={styles.link}>Contact</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};
