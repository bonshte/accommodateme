import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const authContext = useContext(UserContext);
  const {
    isAuth
  } = authContext!;

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth,navigate]);

  const username = localStorage.getItem("username");
  return (
    <div>{username}</div>
  )
}

export default Profile