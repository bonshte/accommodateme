import React from 'react'
import './styles/footer.css'
const today = new Date();
const Footer = () => {
  return (
    <footer className="footer-main">
          <p>AccommodateMe &copy; {today.getFullYear()}</p>
          <form className="footer-subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <label className="footer-email-text" htmlFor="email-subscribe">
                Want to receive <span> exclusive </span> accommodation offers? <br/> Subscribe to our <span>newsletter</span>.
            </label>
            <input id="footer-email-subscribe-input" placeholder="Subscribe" type="text"/>
            <button id="footer-subscribe-button"> Subscribe</button>
          </form>
    </footer>
  )
}

export default Footer