import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Properties = () => {
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

    
  return (
    <div>Properties</div>
  )
}

export default Properties