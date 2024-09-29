import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Reservations from './pages/Reservations';
import PlaceHolder from './pages/PlaceHolder';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about" element={<PlaceHolder/>} />
          <Route path="/menu" element={<PlaceHolder/>} />
          <Route path="/reservations" element={<Reservations/>} />
          <Route path="/order" element={<PlaceHolder/>} />
          <Route path="/login" element={<PlaceHolder/>} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

export default App;