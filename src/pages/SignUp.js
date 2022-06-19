import React, { useState } from "react";
import Input from "../components/Input.js";
import styles from "./Login.module.css";
import img from "../assets/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../auth/auth";

const SignUp = () => {
  const [user, setUser] = useState({ email: null, password: null });
  const navigate = useNavigate();
  const handleSubmit = (userEmail, userPassword) => {
    setUser({
      email: userEmail,
      password: userPassword,
    });
  };
  const { email, password } = user;
  if (email && password) {
    console.log("true");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  }

  return (
    <div className={styles.card}>
      <img src={img} alt="company logo" />
      <div className={styles.container}>
        <h2>Sign up</h2>
        <hr></hr>
        <Input button="Signup" handleSubmit={handleSubmit} />
        <Link to="/login">Already have an account? Login here</Link>
      </div>
    </div>
  );
};
export default SignUp;
