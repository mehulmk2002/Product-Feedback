import React, { useState } from 'react';
import './PopusForm.css'
import { TfiEmail } from 'react-icons/tfi';
import { AiFillLock } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 

import FeedbackCard from './FeedbackCard';

  
  const Login_Popup = (prop) => {
    const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const userData = {
      email: email,
      password: password,
    };
   

    
    axios.post('http://localhost:4000/login', userData)
      .then((response) => {
       
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
    
        setTimeout(() => {
          
          prop.log_out(true);
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        
        console.error(error);
      });
  };

  return (
    <div className='popupform-main-container'>
    <div className='add-product-form-container'>
      <div className='add-product-form-header'>Log in to continue</div>
       <form onSubmit={handleSubmit}>
            <div className='product-input-container'>
              <span className='icon-margin'>
                <TfiEmail />
              </span>{' '}
              <input type='email' placeholder='Email'value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='product-input-container'>
              <span className='icon-margin'>
                <AiFillLock />
              </span>{' '}
              <input
                type='password' placeholder='Password' value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='form-bottom-disc'>
              Don’t have an account?<Link style={{ marginLeft: '8px' }} onClick={() => {prop.setloginSignupFlag(true)}}>
                Sign up
              </Link>
            </div>
            <div className='product-btn' >
              <button type='submit'>Log in</button>
            </div>
     
        </form>
        </div>
      <div className='Popup-FeedbackCard'  style={{margin:"0"}}><FeedbackCard/></div>
    </div>
  );
};

export default Login_Popup;
