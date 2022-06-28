import React from "react";
import styles from "./SideBar.module.css";
import { useState } from "react";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import sideBarItems from "../helpers/sideBarItems";
import SideBarItem from "./SideBarItem";
const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [clicked, setClicked] = useState(-1);

 
  return (
    <div
      className={
        isExpanded ? `${styles.bar} ${styles["expand-bar"]}` : styles.bar
      }
    >
      {isExpanded ? (
        <BsFillArrowLeftCircleFill
          className={styles["expand-icon"]}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      ) : (
        <BsFillArrowRightCircleFill
          className={styles["expand-icon"]}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      )}
      <div
        className={
          isExpanded
            ? `${styles.container} ${styles["expand-container"]}`
            : styles.container
        }
      >
        <div className={styles.card} onClick={()=>{
          clicked>=0? setIsExpanded(true) : setIsExpanded(false)
        }}>
          {sideBarItems.map((item, index) => (
            <SideBarItem
              key={index}
              onClick={() => {
                setClicked(index);
              }}
              clicked={clicked}
              id={index}
              expand={isExpanded}
              {...item}
            />
          ))}
        </div>
      </div>

      {/* <div
            className={
              isExpanded
                ? `${styles.item} ${styles["expand-item"]}`
                : styles.item
            }
          >
            <MdDashboard />
            {isExpanded && (
              <div>
                <span>Dashboard</span>
                <MdKeyboardArrowRight />
              </div>
            )}
          </div>
          <div
            className={
              isExpanded
                ? `${styles.item} ${styles["expand-item"]}`
                : styles.item
            }
          >
            <FaTools />
            {isExpanded && (
              <div>
                <span>Setup</span>
                <MdKeyboardArrowRight />
              </div>
            )}
          </div>
          <div
            className={
              isExpanded
                ? `${styles.item} ${styles["expand-item"]}`
                : styles.item
            }
          >
            <FaUsers />
            {isExpanded && (
              <div>
                <span>Manage Users</span>
                <MdKeyboardArrowRight />
              </div>
            )}
          </div>
          <div
            className={
              isExpanded
                ? `${styles.item} ${styles["expand-item"]}`
                : styles.item
            }
          >
            <FaGraduationCap />
            {isExpanded && (
              <div>
                <span>Manage Students</span>
                <MdKeyboardArrowRight />
              </div>
            )}
          </div>
          <div
            className={
              isExpanded
                ? `${styles.item} ${styles["expand-item"]}`
                : styles.item
            }
          >
            <FaNewspaper />
            {isExpanded && (
              <div>
                <span>Manage Competitions</span>
                <MdKeyboardArrowRight />
              </div>
            )}
          </div>
          <div
            className={
              isExpanded
                ? `${styles.item} ${styles["expand-item"]}`
                : styles.item
            }
          >
            <FaDatabase />
            {isExpanded && (
              <div>
                <span>Administration</span>
                <MdKeyboardArrowRight />
              </div>
            )}
          </div>
          <div
            className={
              isExpanded
                ? `${styles.item} ${styles["expand-item"]}`
                : styles.item
            }
          >
            <RiFilePaper2Line />
            {isExpanded && (
              <div>
                <span>Reports</span>
                <MdKeyboardArrowRight />
              </div>
            )}
          </div>
          <div
            className={
              isExpanded
                ? `${styles.item} ${styles["expand-item"]}`
                : styles.item
            }
          >
            <FiMail />
            {isExpanded && (
              <div>
                <span>Mail Templates</span>
                <MdKeyboardArrowRight />
              </div>
            )}
          </div>
          <div
            className={
              isExpanded
                ? `${styles.item} ${styles["expand-item"]}`
                : styles.item
            }
          >
            <FiSettings />
            {isExpanded && (
              <div>
                <span>Settings</span>
                <MdKeyboardArrowRight />
              </div>
            )}
          </div>
        </div>
            */}
    </div>
  );
};
export default SideBar;
