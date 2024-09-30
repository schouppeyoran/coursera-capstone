// Footer.js
import React from 'react';
import { HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import logo from './assets/logo_footer.svg';

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
            <p>123 Main Street, Anytown USA</p>
            <p>858-858-8585</p>
            <p>contactus@littlelemon.com</p>
          </section>
          <section id='social-media'>
            <h1>Social Media</h1>
            <nav>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </nav>
          </section>
        </HStack>
      </footer>
    );
  };

export default Footer;