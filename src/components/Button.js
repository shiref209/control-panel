import React from "react";
import styles from './Button.module.css';

const Button=(props)=>{

    return <div className={styles.container} style={{background:props.color}}>
        {props.icon}
        <span>{props.name}</span>
    </div>
}

export default Button;