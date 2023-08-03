import React from 'react'
import '../styles/about.css';
const About = () => {
  return (
    <div className="about">
      <div className="about-section">
        <h1 className="about-us-heading">About us</h1>
        <br/>
        <p className="about-us-text">
          Welcome to our AccommodateMe, your trusted online home for exploring, discovering, and securing the best properties available on the market, for either rent or sale. Our mission is to streamline the property search process and to assist you in navigating the real estate market with precision, accuracy, and complete ease.
        </p>
      </div>
      <div className="about-section">
        <h3 className="about-title">About Accommodate Me:</h3>
        <p className="about-text">
          Our platform stands out for its advanced AI-driven search engine that refines and personalizes your property search, providing you with accurate, relevant, and in-depth information tailored specifically to your unique needs and preferences. From location to budget, from amenities to nearby facilities, we’ve made it possible for you to specify every criterion you desire, ensuring you find the perfect property that ticks all your boxes.
        </p>
      </div>
      <div className="about-section">
        <h3 className="about-title">Effortless Apartment Search:</h3>
        <p className="about-text">
          With the knowledge that property search can often be overwhelming, we have transformed that process into an enjoyable journey. Whether you are a first-time homebuyer, a seasoned investor, or simply looking to rent a new place, our platform leverages cutting-edge technology to provide you with a modern, intuitive, and user-friendly interface that simplifies your search and accelerates your success.
        </p>
      </div>
    </div>
  )
}

export default About