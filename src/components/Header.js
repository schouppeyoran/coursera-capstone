// Header.js
import { Link } from 'react-router-dom';
import logo from './assets/Logo.svg'
const Header = () => {
    return (
        <header>
            <img src={logo} alt="Little Lemon Logo" />
            <nav>
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