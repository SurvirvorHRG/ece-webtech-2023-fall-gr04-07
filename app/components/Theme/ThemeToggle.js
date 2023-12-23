"use client";

import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from './ThemeContext';

export default function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      className="w-10 h-5 rounded-2xl cursor-pointer flex items-center justify-center relative"
      onClick={toggle}
      style={
        theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className="w-3.5 h-3.5 rounded-2xl absolute"
        style={
          theme === "dark"
            ? { left: 5, background: "#0f172a" }
            : { right: 5, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
}
