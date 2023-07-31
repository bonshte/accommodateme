import React from 'react'
import './styles/footer.css'
const today = new Date();
const Footer = () => {
  return (
    <footer className="footer-main">
          <p>AccommodateMe &copy; {today.getFullYear()}</p>

    </footer>
  )
}

export default Footer