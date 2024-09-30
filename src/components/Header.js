import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/Logo.svg';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

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
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
          <li><Link to="/menu" className={isActive('/menu') ? 'active' : ''}>Menu</Link></li>
          <li><Link to="/reservations" className={isActive('/reservations') ? 'active' : ''}>Reservations</Link></li>
          <li><Link to="/order" className={isActive('/order') ? 'active' : ''}>Order</Link></li>
          <li><Link to="/login" className={isActive('/login') ? 'active' : ''}>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
