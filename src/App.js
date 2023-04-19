import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import AboutUs from './components/aboutUs/AboutUs'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  

  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/aboutUs' element={<AboutUs />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
