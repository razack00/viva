import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './pages/About'
import Contact from './pages/Contact'
// import Details from './pages/Details';
import Reservation from './pages/Reservation'
import TransportServices from './pages/TransportServices';
import CourierServices from './pages/CourierServices';
import ReservationDetails from './pages/ReservationDetails';
import Blog from './pages/Blog';
import Details from './pages/Details';
import { ContextProvider } from './context/DataContext';

function App() {

  return (
    <>
      <Router>
        <ContextProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/reservationdetails' element={<ReservationDetails />} />
            <Route path='/about' element={<About />} />
            <Route path='services/transportServices' element={<TransportServices />} />
            <Route path='/services/CourierServices' element={<CourierServices />} />
            <Route path='/details/:id' element={<Details/>} />
            <Route path='/reservation' element={<Reservation />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
          </Routes> 
          <Footer/>
        </ContextProvider>
      </Router>
    </>
  );
}

export default App;
