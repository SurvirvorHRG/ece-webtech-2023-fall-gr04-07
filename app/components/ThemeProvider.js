"use client";

import { ThemeContext } from "./ThemeContext";
import React, { useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={((theme === "dark")
    ? "bg-slate-950 text-white"
    : "bg-white")}>{children}</div>;
  }
};

export default ThemeProvider;