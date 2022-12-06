import React from 'react';
import { Routes, Route} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


// import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import './App.css'
import Recipe from './components/Recipe/Recipe';
const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  console.log(user)
  return (
      <>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/auth" exact element={<Auth />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          {/* <Route path="/:category" element={<Home category=category />} /> */}
          {/* <Route path="/auth" exact element={() => ((!user || user.length===0) ? <Auth /> : navigate('/'))} /> */}
        </Routes>
      </>
  );
};

export default App;
