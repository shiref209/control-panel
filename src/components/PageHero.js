import React from "react";
import styles from "./PageHero.module.css";
import { FaTools } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const PageHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <FaTools className={styles.icon1} />
        <p>Setup</p>
      </div>
      <div className={styles.icon2}>
        <MdKeyboardArrowRight />
      </div>

      <div className={styles["sub-main"]}>
        <p>Schools</p>
      </div>
    </div>
  );
};
export default PageHero;
