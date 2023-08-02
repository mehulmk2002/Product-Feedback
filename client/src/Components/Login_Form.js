import React, { useState } from 'react';
import './Form.css';
import { TfiEmail } from 'react-icons/tfi';
import { AiFillLock } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios library

  
  const Login_Form = (prop) => {
    const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with the data to be sent to the server
    const userData = {
      email: email,
      password: password,
    };

    // Make the HTTP POST request to the server using axios
    axios.post('http://localhost:4000/login', userData)
      .then((response) => {
        // Handle the response from the server if needed
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
    
        setTimeout(() => {
          
          prop.setLoggedIn(true);
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        // Handle errors if the request fails
        console.error(error);
      });
  };

  return (
    <div className='form-screen'>
      <div className='login-form-container'>
        <div className='feedback-title-bar'>Feedback</div>
        <div className='login-disc'>Add your products and give us your valuable feedback</div>
        <form onSubmit={handleSubmit}>
          <div className='inner-login-form-container'>
            <div className='input-container'>
              <span className='icon-margin'>
                <TfiEmail />
              </span>{' '}
              <input type='email' placeholder='Email'value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='input-container'>
              <span className='icon-margin'>
                <AiFillLock />
              </span>{' '}
              <input
                type='password' placeholder='Password' value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='form-bottom-disc'>
              Don’t have an account?<Link style={{ marginLeft: '8px' }} to={'/signup'}>
                Sign up
              </Link>
            </div>
            <div className='login-btn-box' style={{ float: 'right' }}>
              <button type='submit'>Log in</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login_Form;
