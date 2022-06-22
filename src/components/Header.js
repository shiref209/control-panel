import React from 'react';
import userImg from '../assets/user-pofile.jpg';
import companylogo from '../assets/company logo.png';
import styles from './Header.module.css';
import {IoIosNotificationsOutline} from 'react-icons/io'

const Header=()=>{

    return <div className={styles.container}>
        <img src={companylogo} alt="logo" />
        <div className={styles['user-container']}>
            <div className={styles.user}>
            <div className="icon">
                <IoIosNotificationsOutline className={styles.icon}/>
                <span>1</span>
            </div>
            <div className={styles['user-img']}>
            <img src={userImg} alt="user's photo" />
            <h3>bar</h3>
            </div>
            </div>

        </div>
    </div>
}

export default Header;