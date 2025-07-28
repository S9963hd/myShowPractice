import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Components/Cards';
import Navigation from './Components/Navigation.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Routes
import Main from './Pages/Main.jsx';
import Login from './Pages/Login.jsx';
import Booking from './Pages/Booking.jsx';
import AvailableConcert from './Pages/AvailableConcert.jsx';
function App() {
  return (
    <Router>
      <Navigation />
        <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/concert" element={<AvailableConcert/>} />
              <Route path="/booking" element={<Booking/> }/>
              <Route path="/cards" element={<Cards data={{ image: logo, title: "Sample Card", texts: ["Text 1", "Text 2"] }} />} />
              <Route path="/login" element={<Login/>} />
        </Routes>
      
    </Router>
  );
}

export default App;
