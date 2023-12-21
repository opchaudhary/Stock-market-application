// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header'
import Dashboard from './components/MainDashboard';
import StockSearch from './components/SearchStock';


const App = () => {
  return ( 
    <Router>
      <Header/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path="/stocks" element={<StockSearch/>} />
      </Routes>
    </Router>
  );
};

export default App;
