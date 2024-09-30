// Header.js
import { Link } from 'react-router-dom';
import logo from './assets/Logo.svg'
import { Box, HStack } from '@chakra-ui/react';

const Header = () => {
    return (
        <Box backgroundColor="black">
        <Box color="white" maxWidth="1280px" margin="0 auto">
          <HStack
            px={16}
            py={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <nav>
              <HStack spacing={8}>
                    <Link to="/">
                        <img src={logo} alt="Little Lemon Logo" />
                    </Link>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/reservations">Reservations</Link>
                    <Link to="/order">Order</Link>
                    <Link to="/login">Login</Link>
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>
    );
};

export default Header;