import React, { useEffect, useState } from 'react';
import MessageContainer from '../../components/MessageContainer/MessageContainer';
import TableContainer from '../../components/TableContainer/TableContainer';

const Home = () => {

  const [isAdmin, setIsAdmin] = useState(false);

  const [allUsers, setAllUsers] = useState(); 
  const [message, setMessage] = useState(null);

  const user = JSON.parse(localStorage.getItem('profile'));
  const messages = JSON.parse(localStorage.getItem('message'));
  console.log(messages);

  useEffect(() => {
    setAllUsers(user.allUsers);
    if(user?.result.email === "admin@admin.com" && user?.result.mobile === "0000000000") {
      setMessage(messages);
      setIsAdmin(true);
      console.log(message);
    }else {
      setIsAdmin(false);
    }
  }, [user?.result?.email, user?.result?.mobile])

  return (
    <>
    {
      isAdmin ? <TableContainer allUsers={allUsers} allMessage={message}/> : <MessageContainer />
    }
    </>
  )
}

export default Home;