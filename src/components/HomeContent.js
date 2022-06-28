import React from "react";
import styles from "./HomeContent.module.css";
import InfoCard from "./InfoCard";
import { IoIosTimer } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { GrFormAdd } from "react-icons/gr";
import { AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import Button from "./Button";
import FilterButton from "./FilterButton";
import SearchBar from "./SearchBar";
import ContentTable from "./ContentTable";


const HomeContent = () => {
  return (
    <div className={styles.container}>
      <h2>Schools</h2>
      <div className={styles["filter-container"]}>
        <FilterButton text="View Options" />
        <FilterButton text="Filter" />
      </div>

      <div className={styles["info-card"]}>
        <InfoCard icon={<IoIosTimer />} />
        <InfoCard icon={<IoIosTimer />} />
      </div>
      <div className={styles.buttons}>
        <Button
          icon={<IoAdd />}
          name="Add New School"
          color="var(--unnamed-color-b5c3fc)"
        />
        <Button
          icon={<AiOutlineCheck />}
          name="Mass Approve"
          color="var(--unnamed-color-a9abd3)"
        />
        <Button
          icon={<AiFillDelete />}
          name="Mass Delete"
          color="var(--unnamed-color-f3797e)"
        />
        <SearchBar/>
        
      </div>
      <ContentTable/>
    </div>
  );
};
export default HomeContent;
