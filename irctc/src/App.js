import './App.css';
import { createContext, useEffect, useState } from "react";
import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Register } from './Register';
import { RegisterAndLogin } from './Log';
import { Home } from './Home';
import { AboutUs } from "./AboutUs"
import { BookList } from "./BookList"
import { Profile } from './Profile';
import { Payment } from "./Payment"
// import Axios from "axios";
// import { Contact } from './contact.js';
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// https://irctc-f3649-default-rtdb.firebaseio.com/

function App() {
  return (
    <div className="App">
      <div className='content'>
        <Router>
          <div className='navbar'>
            <nav>
              <Link to={"/"}>Home</Link>
              <Link to={"/About"}>About Us</Link>
              <Link to={"/Booklist"}>BookList</Link>
              <Link to={"/Profile"}>Profile</Link>
              <Link to={"/Payment"}>Payment</Link>
              <Link to={"/LogIn"}>Login/Register</Link>
            </nav>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<AboutUs />} />
            <Route path="/BookList" element={<BookList />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path='/Payment' element={<Payment />} />
            <Route path="/LogIN" element={<RegisterAndLogin />} />
            <Route path="/Register" element={<RegisterAndLogin />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
