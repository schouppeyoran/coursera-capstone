// Footer.js
import React from 'react';
import logo from './assets/logo_footer.png';
const Footer = () => {
    return (
      <footer>
        <img src={logo} alt="Logo" height="50px" />
        <section>
          <h1>Doormat Navigation</h1>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Reservations</a></li>
              <li><a href="#">Order Online</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </nav>
        </section>
        <section>
          <h1>Contact Us</h1>
          <p>123 Main Street, Anytown USA</p>
          <p>858-858-8585</p>
          <p>contactus@littlelemon.com</p>
        </section>
        <section>
          <h1>Social Media</h1>
          <nav>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </nav>
        </section>
      </footer>
    );
  };
export default Footer;