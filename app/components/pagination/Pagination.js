"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

const Pagination = ({ search, page, hasPrev, hasNext }) => {
  const router = useRouter();
  search = search || ""
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => router.push(`?search=${search}&page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        onClick={() => router.push(`?search=${search}&page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
