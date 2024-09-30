import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

import Homepage from './pages/Homepage';
import Reservations from './pages/Reservations';
import PlaceHolder from './pages/PlaceHolder';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';


const App = () => {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/about" element={<PlaceHolder title="About Us"/>} />
            <Route path="/menu" element={<PlaceHolder title="Menu"/>} />
            <Route path="/reservations" element={<Reservations/>} />
            <Route path="/order" element={<PlaceHolder title="Order Online"/>} />
            <Route path="/login" element={<PlaceHolder title="Customer Portal"/>} />
          </Routes>
        </Main>
        <Footer />
      </ChakraProvider>
    </>
  );
};

export default App;