import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import Countdown from 'react-countdown';

const Navbar = () => {

  const [user, setUser] = useState(null);
  const [time, setTime] = useState(0);

  
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
    setTime(user?.result.loginAt);
  }, [time, user?.result.loginAt]);
  
  


  const navigate = useNavigate();
  
  const logoutHandler = () => {
    localStorage.removeItem('profile');
    navigate('/auth');
    window.location.reload();
  }

const renderer = ({ minutes, seconds, completed }) => {
  if (completed) {
    localStorage.removeItem('profile');
    navigate('/auth');
    window.location.reload();
  } else {
    return <span>{minutes}:{seconds}</span>;
  }
};

  return (
    <>
    {
      !user ?( 
        <section className='navbarContainer'>
          <span></span>
          <h1>Arnowa Task</h1>
          <span></span>
        </section>
      ) : (
        <section className='navbarContainer'>
            {<h1>{user?.result.name}</h1>}
            {<Countdown date={Number(Date.parse(time)) + 600000} renderer={renderer}/>}
            {<button onClick={logoutHandler}>Logout</button>}
        </section>
      )
    }
    </>
  )
}

export default Navbar;