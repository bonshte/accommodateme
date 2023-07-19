import React, { useContext } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import '../styles/rootlayout.css';
import logo from "../images/logo.jpg"
import Footer from '../Footer';
import { UserContext, UserContextProvider } from '../context/UserContext';


const RootLayout = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const {
    isAuth,
    setIsAuth
  } = context!;
  const username = localStorage.getItem("username");
  const profileText = username ? username : "Profile";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsAuth(false);
    
  }
  return (
    <div className="root-layout">
      <header className="main-header">
        <div className="logo-section">
          <img src={logo} alt="logo" />
        </div>
        <nav className="main-nav">
          {isAuth && <NavLink className="nav-link" id="tenant-dashboard-link" to="tenant-dashboard">
            Tenant Dashboard
          </NavLink>}
          {isAuth && <NavLink className="nav-link" id="landlord-dashboard-link" to="landlord-dashboard">
            Landlord Dashboard
          </NavLink>}
          <NavLink className="nav-link" id="home-link" to="/">
            Home
          </NavLink>

          {!isAuth && <NavLink className="nav-link" id="sign-up-link" to="sign-up">
            Sign Up
          </NavLink>}
          {!isAuth && <NavLink className="nav-link" id="login-link" to="login">
            Login
          </NavLink>}

          <NavLink className="nav-link" id="browse-properties-link" to="browse-properties">
            Browse
          </NavLink>
          <NavLink className="nav-link" id="about-link" to="about">
            About
          </NavLink>
          {isAuth && <NavLink className="nav-link" id="profile-link" to="profile">
            {profileText}
          </NavLink>}
          {isAuth && <NavLink onClick={handleLogout} className="nav-link" id="logout-link" to="/">
            Logout
          </NavLink>}
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout