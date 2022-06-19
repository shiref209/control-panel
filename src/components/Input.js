import React from "react";
import styles from "./Input.module.css";
import { useState } from "react";

const Input = (props) => {
  const { button, handleSubmit } = props;
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
// validating email and password
  const validateUser = (event) => {
    const { value } = event.target;
    if (value.includes("@") && value.includes(".com") && value.length !== 0) {
      setEmail(value);
      setError(false);
    }
  };
  const validatePassword = (event) => {
    const { value } = event.target;
    if (value.length > 6) {
      setPassword(value);
      setError(false);
    }
  };
  // lifting email and password to parent
  const formSubmit = () => {
    if (email && password && !error) {
      handleSubmit(email, password);
    } else {
      setError(true);
    }
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.container}>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Your username"
          onChange={validateUser}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          autoComplete="on"
          placeholder="Your password"
          onChange={validatePassword}
          required
        />
      </div>
      {error && (
        <p className={styles.error}>Please enter a valid email and password</p>
      )}
      <button type="submit" onClick={formSubmit}>
        {button}
      </button>
    </form>
  );
};

export default Input;
