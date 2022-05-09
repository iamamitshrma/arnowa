import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
function App() { 

  const user = JSON.parse(localStorage.getItem('profile'));
  
  

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          {!user ? (
            <>
              <Route path='/' element={<Navigate to="/auth" />} />
              <Route path='/auth' element={<Login />} />
            </>
          ): (
            <>
              <Route path='/' element={<Home />} />
              <Route path='/auth' element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
