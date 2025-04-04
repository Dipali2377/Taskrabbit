import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import appStore from "../assets/Footer/appStore.svg";
import googlePlay from "../assets/Footer/googlePlay.svg";
import "../styles/Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <p>Follow us! We're friendly:</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaTiktok />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Discover</h4>
            <ul>
              <li>Become a Tasker</li>
              <li>Services By City</li>
              <li>Services Nearby</li>
              <li>All Services</li>
              <li>Elite Taskers</li>
              <li>Help</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Partner with Taskrabbit</li>
              <li>Press</li>
              <li>Taskrabbit for Good</li>
              <li>Blog</li>
              <li>Terms & Privacy</li>
              <li>California Consumer Notice</li>
              <li>Do Not Sell My Personal Information</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>

        <div className="footer-app">
          <h4>Download our app</h4>
          <p>Tackle your to-do list wherever you are with our mobile app.</p>
          <div className="app-buttons">
            <img src={appStore} alt="App Store" />
            <img src={googlePlay} alt="Google Play" />
          </div>
        </div>
      </div>

      <button className="help-button">❓ Help</button>
    </footer>
  );
};

export default Footer;
