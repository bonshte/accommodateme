import React, { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import axios from '../api/axios';
import "../styles/login.css"
const LOGIN_URL = "api/auth/login";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const statusContext = useContext(UserContext);
  const {
    isAuth,
    setIsAuth
  } = statusContext!;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post (
        LOGIN_URL,
        JSON.stringify({email, password}) ,
        {
          headers: {"Content-Type" : "application/json"}
        }
      );
      const token = response.data.token;
      const userId = response.data.userId;
      localStorage.setItem("token", token);
      localStorage.setItem("userId",userId);
      setIsAuth(true);
      setEmail("");
      setPassword("");
      navigate("/");
    } catch(err) {
      
      console.log(err);
    }
  }

  return (
    <section className="login-section">
      <h1 id="login-heading">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
        </label>
        <input type="text"
        className="login-input"
        autoComplete="off"
        onChange={(e) =>
        setEmail(e.target.value)} 
        value={email}
        required/>
        <label htmlFor="password">
          Password:
        </label>
        <input type="password"
        className="login-input"
        autoComplete="off"
        onChange={(e) =>
        setPassword(e.target.value)} 
        value={password}
        required/>
        <button id="login-button">
            Login
        </button>
      </form>
    </section>
  )
}

export default Login