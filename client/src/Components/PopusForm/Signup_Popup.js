import React, { useState } from 'react';
import { TfiEmail } from 'react-icons/tfi';
import { AiFillLock } from 'react-icons/ai';
import { BsFillPersonFill,BsPhone } from "react-icons/bs";
import { Link } from 'react-router-dom';
import axios from 'axios';
import FeedbackCard from './FeedbackCard';
import './PopusForm.css'
const Signup_Popup = (prop) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
console.log("hello")
    

    const userData = {
      name: name,
      email: email,
      mobile: mobile,
      password: password,
    };

  
    
    axios.post('http://localhost:4000/signup',{name,email,mobile,password} )
      .then((response) => {
      
        
        console.log("response");
        console.log(response.data);

      })
      .catch((error) => {
      
        
        console.error(error);
      });
      console.log(name,email,mobile,password)
      setName('');
      setEmail('')
      setMobile('')
      setPassword('')
  };

  return (
    <div className='popupform-main-container'>
    <div className='add-product-form-container'>
      <div className='add-product-form-header'>Signup to continue</div>
      <form onSubmit={handleSubmit}>
         
            <div className='product-input-container'>
              <span className='icon-margin'>
                <BsFillPersonFill />
              </span>
              <input
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className='product-input-container'>
              <span className='icon-margin'>
                <TfiEmail />
              </span>
              <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='product-input-container'>
              <span className='icon-margin'>
                <BsPhone />
              </span>
              <input
                type='text'
                placeholder='Mobile'
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <div className='product-input-container'>
              <span className='icon-margin'>
                <AiFillLock />
              </span>
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='form-bottom-disc'>
            Already have an account?<Link style={{ marginLeft: '8px' }} onClick={() => {prop.setloginSignupFlag(false)}}>
                Log in
              </Link>
            </div>
            <div className='product-btn' >
              <button type='submit'>Signup</button>
            </div>
    
        </form>
      </div>
      <div className='Popup-FeedbackCard' style={{margin:"0"}}><FeedbackCard/></div>
    </div>
  );
};

export default Signup_Popup;
