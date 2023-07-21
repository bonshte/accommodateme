import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "../api/axios";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import '../styles/Signup.css';
import { UserContext } from "../context/UserContext";

const USER_REGEX = /^[A-z][A-z0-9-_]{6,20}$/;
const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/;
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PHONE_REGEX = /^(\+\d{1,3}\s?)?(\(\d{1,4}\)|\d{1,4})[-\s.]?\d{1,4}[-\s.]?\d{1,9}$/;
const REGISTER_URL = "/api/auth/register";

const SignUp: React.FC = () => {
  const authContext = useContext(UserContext);
  const {
    isAuth,
    setIsAuth
  } = authContext!;

  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [secondPassword, setSecondPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);


  const [validUsername, setValidUsername] = useState<boolean>(false);
  const [userFocus, setUserFocus] = useState<boolean>(false);
  

  const [validEmail, setValidEmail] = useState(false);
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);

  const [validPassword, setValidPassword] = useState<boolean>(false);
  const [pwdFocus, setPwdFocus] = useState<boolean>(false);

  const [validMatch, setValidMatch] = useState<boolean>(false);
  const [matchFocus, setMatchFocus] = useState<boolean>(false);

  const [emailFocus, setEmailFocus] = useState<boolean>(false);

  const [phoneFocus, setPhoneFocus] = useState<boolean>(false);

  const [errMsg, setErrMsg] = useState<string>("");

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {

    setValidUsername(USER_REGEX.test(username));

  }, [username]);

  useEffect(() => {

    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(password === secondPassword);

  }, [password, secondPassword]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPhoneNumber(PHONE_REGEX.test(phoneNumber));
  }, [phoneNumber]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password, secondPassword]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(username);
    const v2 = PWD_REGEX.test(password);

    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ username, password, email, phoneNumber }),
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", username);
      setIsAuth(true);
      setUsername("");
      setPassword("");
      setSecondPassword("");
      setEmail("");
      setPhoneNumber("");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (


    <section className="register-section">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
      >
        {errMsg}
      </p>
      <h1 id="register-heading">Sign up</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
        </label>
        <p className={userFocus && username && !validUsername ? "instructions" : "offscreen"}>
          6 to 20 characters. <br/>
          Letters and numbers.
        </p>
        <input
          type="text"
          className="register-input"
          id="register-username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) =>
            setUsername(e.target.value)}
          value={username}
          required
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <label htmlFor="password">
          Password:
        </label>
        <p className={pwdFocus && !validPassword ? "instructions" : "offscreen"}>
            8 to 15 characters. <br/>
            Numbers and letters. <br/>
            Atleast one number and letter.
        </p>
        <input
          type="password"
          className="register-input"
          id="register-password"
          onChange={(e) =>
            setPassword(e.target.value)}
          value={password}
          required
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        />
        <label htmlFor="confirm-pwd">
          Confirm Password:
        </label>
        <p className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
            Must match the first password input field.
        </p>
        <input
          type="password"
          className="register-input"
          id="register-confirm_pwd"
          onChange={(e) => setSecondPassword(e.target.value)}
          value={secondPassword}
          required
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
        />
        <label htmlFor="email">
          Email:
        </label>
        <p className={emailFocus && !validEmail ? "instructions" : "offscreen"}>
            Email must be in valid format.
        </p>
        <input
          type="text"
          className="register-input"
          id="register-email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
        <label htmlFor="phone-number">
          Phone Number:
        </label>
        <p className={phoneFocus && !validPhoneNumber ? "instructions" : "offscreen"}>
            Phone number must be valid format.
        </p>
        <input
          type="text"
          className="register-input"
          id="register-phone-number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
          required
          onFocus={() => setPhoneFocus(true)}
          onBlur={() => setPhoneFocus(false)}
        />
        
        <button id="register-button" disabled={!validUsername || !validPassword || !validMatch}>
          Sign Up
        </button>
      </form>
      <div id="register-login-redirect">
        <p>Already have an account?</p>
        <NavLink to="/login">
          Login
        </NavLink>
      </div>
    </section >
  )
}


export default SignUp;