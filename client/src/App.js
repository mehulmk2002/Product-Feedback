import React, { useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login_Form from './Components/Login_Form';
import Signup_Form from './Components/Signup_Form';

const App = () => {
  const [isLogIn,setLoggedIn]=useState(false)

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/login'  element={<Login_Form setLoggedIn={setLoggedIn} />}/>
        <Route path='/signup'  element={<Signup_Form/>}/>
        <Route path='/'  element={<HomePage log_out={setLoggedIn} isLogIn={isLogIn} />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

