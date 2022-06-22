import React from "react";
import styles from './SearchBar.module.css';
import {BiSearchAlt2} from 'react-icons/bi'

const SearchBar=()=>{
    return <div className={styles.container}>
        <BiSearchAlt2/>
        <input type='search' placeholder="Search for Schools..."/>
    </div>
}
export default SearchBar;