import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../styles/rootlayout.css';
import logo from "../images/logo.jpg"
import Footer from '../Footer';
const RootLayout = () => {
  return (
    <div className="root-layout">
        <header className="main-header">
            <div className="logo-section">
            <img src={logo} alt="logo" />
            </div>
            <nav className="dashboard-section">
            <NavLink className="nav-link" id="tenant-dashboard-link" to="tenant-dashboard">
              Tenant Dashboard
              </NavLink>
                <NavLink className="nav-link" id="landlord-dashboard-link" to="landlord-dashboard">
                  Landlord Dashboard
                  </NavLink>
            </nav>
            
            <nav className="main-nav">
                <NavLink className="nav-link" id="home-link" to="/">Home</NavLink>
                <NavLink className="nav-link" id="sign-up-link" to="sign-up">Sign Up</NavLink>
                <NavLink className="nav-link" id="login-link" to="login">Login</NavLink>
                <NavLink className="nav-link" id="browse-properties-link" to="browse-properties">Browse</NavLink>
                <NavLink className="nav-link" id="about-link" to="about">About</NavLink>
                <NavLink className="nav-link" id="profile-link" to="profile">Profile</NavLink>
            </nav>
        </header>
        <main className="main-content">
            <Outlet />
        </main>
        <Footer/>
        
    </div>
  )
}

export default RootLayout