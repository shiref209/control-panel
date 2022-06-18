import React from 'react';
import Input from '../components/Input.js';
import styles from './Login.module.css';
import img from '../assets/logo.jpeg';
import {Link} from 'react-router-dom';

const Login=()=>{

    return <div className={styles.card}>
        <img src={img} alt='company logo'/>
        <div className={styles.container}>
            <h2>LOGIN</h2>
            <hr></hr>
            <Input type='text' label='Username' placeholder='Your user name'/>
            <Input type='password' label='Password' placeholder='Your password'/>
            <Link to='/forgot-password'>forgot password?</Link>
            <button type='submit'>Login</button>
            <Link to='/signup'>Create a new account</Link>
        </div>
    </div>
        

}

export default Login