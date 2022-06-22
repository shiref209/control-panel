import React from "react";
import styles from './SideBar.module.css';
import {MdDashboard,MdKeyboardArrowRight} from 'react-icons/md'
import {FaUsers,FaGraduationCap,FaNewspaper,FaDatabase, FaTools} from 'react-icons/fa';
import {FiMail,FiSettings} from 'react-icons/fi';
import {RiFilePaper2Line} from 'react-icons/ri';
const SideBar=()=>{

    return <div className={styles.bar}>
         <div className={styles.container}>
        <div className={styles.card}>
            <div>
            <MdDashboard/>
            </div>
        
        <FaTools/>
        <FaUsers/>
        <FaGraduationCap/>
        <FaNewspaper/>
        <FaDatabase/>
        <RiFilePaper2Line/>
        <FiMail/>
        <FiSettings/>
        
        </div>
     

    </div>
    </div>
    
}
export default SideBar;