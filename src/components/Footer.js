// Footer.js
import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, } from "@fortawesome/free-brands-svg-icons";

import './Footer.css';
import logo from './assets/logo_footer.svg';

const socials = [
  {
    icon: faFacebook,
    url: "https://www.facebook.com/",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/",
  },
  {
    icon: faTwitter,
    url: "https://x.com/",
  },
 ];

const Footer = () => {
    return (
      <footer>
          <img className='footer-logo' src={logo} alt="Logo" height="50px" />
          <section id='contact-us'>
            <h1>Contact Us</h1>
            <p>123 Main Street<br/>Anytown USA</p>
            <p>858-858-8585</p>
            <p>contactus@littlelemon.com</p>
          </section>
          <section id='social-media'>
            <h1>Social Media</h1>
            <nav>
              {socials.map(({ icon, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={icon} size="lg" key={url} />
                </a>
              ))}
            </nav>
          </section>
          <section id='navigation-map'>
            <h1>Site Map</h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order">Order</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </nav>
          </section>
      </footer>
    );
  };

export default Footer;