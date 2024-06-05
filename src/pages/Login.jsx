import React from 'react';
import logo from '../assets/images/logo.svg';
import { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('johnd');
  const [password, setPassword] = useState('m38rmF$');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username: username,
        password: password
      });

      if (response.status === 200) {
        console.log('Login successful');
        alert('Login successful!');
        navigate('/admin');
      } else {
        console.error('Login failed. Invalid username or password.');
        alert('Login failed. Invalid username or password.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in. Please try again.');
    }
  };
  return (
    <div>
      <form onSubmit={handleLogin} className='login'>
        <h2 className='login__logo'><img src={logo} alt="logo" /></h2>
        <p className='login__text'>Your Email*</p>
        <input className='input__login' value={username} onChange={e => setUsername(e.target.value)} type="text" />
        <p className='login__text'>Your Password*</p>
        <input className='input__login' value={password} onChange={e => setPassword(e.target.value)} type="password" />
        <div className='div'>
          <div>
            <input className='check' type="checkbox" />
            <label className='label' htmlFor="checkbox">Remember me</label>
          </div>
          <p className='sign'>Forget Password?</p>
        </div>
        <div className='div'>
          <button className='products__btn' type='submit'>Log in</button>
          <p className='sign'>Signup?</p>
        </div>
      </form>
    </div>
  );
};

export default Login;