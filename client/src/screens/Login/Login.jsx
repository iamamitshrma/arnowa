import React, { useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {

  const [item, setItem] = useState({
    name: "",
    email: "",
    mobile: "",
    password: ""
  });

  const navigate = useNavigate();

  
  
  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  }
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/auth/login", item);
    localStorage.setItem('profile', JSON.stringify(response.data));
    console.log(response.data)
    navigate('/');
    window.location.reload();
  }
  
  return (
    <section className='loginContainer'>
      <div className="formContainer">

      <div className="arnowaContainer">
        <h1>Arnowa Login</h1>
      </div>
      <form className='loginForm' onSubmit={handleSubmit}>
        <div className="nameContainer">
          <label htmlFor="name">Name</label>
          <input onChange={handleChange} id='name' name='name' type="text" placeholder='Enter your name' />
        </div>

        <div className="emailContainer">
          <label htmlFor="email">Email</label>
          <input onChange={handleChange} type="email" name="email" id="email" placeholder='Enter your email' />
        </div>

        <div className="mobileContainer">
          <label htmlFor="mobile">Mobile</label>
          <input onChange={handleChange} type="number" name="mobile" id="mobile" placeholder='Enter your mobile' />
        </div>

        <div className="passwordContainer">
          <label htmlFor="password">Password</label>
          <input onChange={handleChange} type="password" name="password" id="password" placeholder='Enter your password'/>
        </div>
        <button className='btn' type="submit">Login</button>
      </form>
      </div>
    </section>
  )
}

export default Login;