import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Logo.svg';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo-content">
        <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Link to="/" className="logo">
          <img src={logo} alt="Little Lemon Logo" />
        </Link>
      </div>
      <nav>
        <ul
          className={menuOpen ? "nav-expanded" : ""}
          onClick={() => setMenuOpen(!menuOpen)}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/order">Order</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
