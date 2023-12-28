"use client";
import Link from "next/link";
import { useState,useContext } from "react";
import UserContext from './UserContext'

const styles = {
    link:"cursor-pointer hidden sm:block",
    burger:"w-[20px] h-[16px] flex-col justify-between cursor-pointer flex sm:hidden ",
    line:"w-full h-0.5 bg-red-400",
    responsiveMenu:"absolute bg-red-400 h-[calc(100vh_-_100px)] w-full flex flex-col items-center justify-center gap-[50px] text-4xl z-[999] left-0 top-[100px]"
}

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { user,login,logout } = useContext(UserContext)

  return (
    <>
      {!user ? (
          <span className={styles.link} onClick={login}>
          Login
        </span>
      ) : (
        <>
          <Link href="/writeArticle" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={logout}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/about">About</Link>
          <Link href="/contacts">Contact</Link>
          {!user ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/writeArticle">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;