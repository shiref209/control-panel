import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete, AiOutlineUserAdd } from "react-icons/ai";
import styles from "./TableIcons.module.css";

const TableIcons = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} title="edit">
        <BiEdit />
        
      </button>
      <button className={styles.button} title="delete">
        <AiFillDelete />
       
      </button>
      <button className={styles.button} title="add participant">
        <AiOutlineUserAdd />
        
      </button>
    </div>
  );
};

export default TableIcons;
