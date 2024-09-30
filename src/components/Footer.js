// Footer.js
import React from 'react';
import { HStack } from '@chakra-ui/react';
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
        <HStack spacing="32px" alignItems="flex-start">
          <img src={logo} alt="Logo" height="50px" />
          <section id='navigation-map'>
            <h1>Doormat Navigation</h1>
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
          <section id='contact-us'>
            <h1>Contact Us</h1>
            <p>123 Main Street<br/>Anytown USA</p>
            <p>858-858-8585</p>
            <p>contactus@littlelemon.com</p>
          </section>
          <section id='social-media'>
            <h1>Social Media</h1>
            <nav>
            <HStack spacing={8}>
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
            </HStack>
         </nav>
          </section>
        </HStack>
      </footer>
    );
  };

export default Footer;