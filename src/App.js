
import React from 'react';
import Navbar from './components/Navbar.js';
import './App.css';
import Home from './components/pages/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Services from './components/pages/Services.js';
import Products from './components/pages/Products.js';
import About from './components/pages/About.jsx';
import Chat from './components/chat.jsx';
import ContactUs from './components/contactus.jsx';
import SelfStudy from './components/pages/Selfstudy.jsx';
import NotranslateWrapper from './components/pages/NotranslateWrapper.jsx';


function App() {

  return (
    <>
<Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <NotranslateWrapper>
              <Home />
            </NotranslateWrapper>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route
          path="/products"
          element={
            <NotranslateWrapper>
              <Products />
            </NotranslateWrapper>
          }
        />
        <Route path="/selfstudy" element={<SelfStudy />} />
        <Route
          path="/about"
          element={
            <NotranslateWrapper>
              <About />
            </NotranslateWrapper>
          }
        />
        <Route
          path="/Chat"
          element={
            <NotranslateWrapper>
              <Chat />
            </NotranslateWrapper>
          }
        />
        <Route
          path="/contactus"
          element={
            <NotranslateWrapper>
              <ContactUs />
            </NotranslateWrapper>
          }
        />
      </Routes>
    </Router>
    </>
  );
}

export default App;