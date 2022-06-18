import React from 'react';
import Input from '../components/Input.js';
import styles from './Login.module.css';
import img from '../assets/logo.jpeg';
import {Link} from 'react-router-dom';

const SignUp=()=>{

    return <div className={styles.card}>
        <img src={img} alt='company logo'/>
        <div className={styles.container}>
            <h2>Sign up</h2>
            <hr></hr>
            <Input type='text' label='Username' placeholder='Your user name'/>
            <Input type='password' label='Password' placeholder='Your password'/>
            <Link to='/login'>Already have an account? Login here</Link>
            <button type='submit'>Sign up</button>
        </div>
    </div>
        

}
export default SignUp;