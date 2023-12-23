import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination.js";
import Image from "next/image";



const CardList = () => {
  return (
    <div className={styles.container}>CardList
      <Pagination/>
    </div>
  );
};

export default CardList;
