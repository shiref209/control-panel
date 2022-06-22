import React from "react";
import styles from './InfoCard.module.css';


const InfoCard=(props)=>{

    return <div className={styles.container}>
        {props.icon}
        <span>11</span>
        <span>Pending Schools</span>
    </div>
}

export default InfoCard;