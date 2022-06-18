import React from 'react';
import Input from '../components/Input.js';
import styles from './Login.module.css';
import img from '../assets/logo.jpeg';


const ForgotPassword=()=>{

    return <div className={styles.card}>
        <img src={img} alt='company logo'/>
        <div className={styles.container}>
            <h2>Forget Password?</h2>
            <hr></hr>
            <div className={styles.text}>
                <p>Please enter your registered email address</p>
                <span>We will send a verification code to your registered email address</span>
            </div>
            <Input type='email' label='Email' placeholder='Your Email'/>
            <button type='submit'>Next</button>
        </div>
    </div>
        

}
export default ForgotPassword;