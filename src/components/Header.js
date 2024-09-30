// Header.js
import { Link } from 'react-router-dom';
import logo from './assets/Logo.svg'

// Styles, keeping it here for now, but will move to a separate file later
// header
const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: 'white',
};
// nav
const navStyle = {
    display: 'flex',
    gap: '20px',
};

const Header = () => {
    return (
        <header style={headerStyle}>
            <Link to="/">
                <img src={logo} alt="Little Lemon Logo" />
            </Link>
            <nav style={navStyle}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/reservations">Reservations</Link>
                <Link to="/order">Order</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    );
};

export default Header;