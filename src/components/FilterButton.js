import React from "react";
import styles from "./FilterButton.module.css";
import { RiArrowDownSFill } from "react-icons/ri";

const FilterButton = (props) => {
  return (
    <button className={styles.button}>

      <span>{props.text}</span>
      <RiArrowDownSFill size='20'  />
 
     
    </button>
  );
};
export default FilterButton;
