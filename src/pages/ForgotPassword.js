import React, { useState } from 'react';
import Input from '../components/Input.js';
import styles from './Login.module.css';
import img from '../assets/logo.jpeg';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../auth/auth.js';


const ForgotPassword=()=>{
    const [email,setEmail]=useState('');
    const [error,setError]=useState(false)
    const handleEmail=(event)=>{
        const {value}=event.target;
        if (value.includes("@") && value.includes(".com") && value.length !== 0) {
            setEmail(value);
            setError(false);
          }
          else{
            setError(true)
          }
    }
    const resetPassword=()=>{
        if (!error && email){
            sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
    console.log('done')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
        }

    }

    return <div className={styles.card}>
        <img src={img} alt='company logo'/>
        <div className={styles.container}>
            <h2>Forget Password?</h2>
            <hr></hr>
            <div className={styles.text}>
                <p>Please enter your registered email address</p>
                <span>We will send a verification code to your registered email address</span>
            </div>
            <input type='email' label='Email' placeholder='Your Email' onChange={handleEmail}/>
            {error && <p className={styles.error}>Please enter a valid email address</p>}
            <button type='submit' onClick={resetPassword}>Next</button>
        </div>
    </div>
        

}
export default ForgotPassword;