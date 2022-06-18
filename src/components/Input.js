import React from "react";
import styles from './Input.module.css'
const Input=(props)=>{
    const {label,placeholder,type}=props;
    return <div className={styles.container}>
        <label >{label}</label>
        <input type={type} placeholder={placeholder} />
        
    </div>
}

export default Input