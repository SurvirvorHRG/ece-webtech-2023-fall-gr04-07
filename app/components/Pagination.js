"use client";

import React from "react";
import { useRouter } from "next/navigation";

const styles = {
  container:"flex justify-between",
  button:"w-[100px] border-[none] p-[16px] bg-[crimson] text-[white] cursor-pointer",
  button_disabled:"w-[100px] border-[none] p-[16px] bg-[crimson] text-[white] cursor-pointer bg-[rgba(220,_20,_60,_0.473)] cursor-not-allowed"
}


const Pagination = ({ search, page, hasPrev, hasNext }) => {
  const router = useRouter();
  search = search || ""
  return (
    <div className={styles.container}>
      <button
        className={(hasPrev ? styles.button : styles.button_disabled)}
        disabled={!hasPrev}
        onClick={() => router.push(`?search=${search}&page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={(hasNext ? styles.button : styles.button_disabled)}
        onClick={() => router.push(`?search=${search}&page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
