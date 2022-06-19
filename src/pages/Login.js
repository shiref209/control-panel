import React from "react";
import Input from "../components/Input.js";
import styles from "./Login.module.css";
import img from "../assets/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import auth from "../auth/auth.js";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState({ email: null, password: null });
  const navigate = useNavigate();
  const handleSubmit = (userEmail, userPassword) => {
    setUser({
      email: userEmail,
      password: userPassword,
    });
  };
  const { email, password } = user;
  //   firebase auth sign-in
  if (email && password ) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  }

  return (
    <div className={styles.card}>
      <img src={img} alt="company logo" />
      <div className={styles.container}>
        <h2>LOGIN</h2>
        <hr></hr>
        <Input button="Login" handleSubmit={handleSubmit} />
        <Link to="/forgot-password">forgot password?</Link>
        <Link to="/signup">Create a new account</Link>
      </div>
    </div>
  );
};

export default Login;
