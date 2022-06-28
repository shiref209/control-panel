import styles from "./SideBarItem.module.css";
import React from "react";
import { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

function SideBarItem(props) {
  const { icon, title, list, expand, id, clicked } = props;
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={
        clicked === id
          ? `${styles.container} ${styles.active}`
          : styles.container
      }
    >
      <div
        onClick={() => props.onClick(id)}
        className={
          expand ? `  ${styles.item} ${styles["expand-item"]}` : styles.item
        }
      >
        {<props.icon />}
        {expand && (
          <div className={styles.content}>
            <span>{title}</span>
            {clicked === id && isClicked ? (
              <MdKeyboardArrowDown onClick={()=>{props.onClick(-1)
              setIsClicked(!isClicked)}} />
            ) : (
              <MdKeyboardArrowRight onClick={() => setIsClicked(!isClicked)} />
            )}
          </div>
        )}
      </div>
      {expand && clicked === id && isClicked && (
        <div className={`${styles["list-container"]} ${styles.active}`}>
          <ul className={styles.list}>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SideBarItem;
