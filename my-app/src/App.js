import React from 'react';
import { Routes, Route} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


// import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import './App.css'
import Recipe from './components/Recipe/Recipe';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Contribute from './components/Contribute/Contribute';
import New from './components/New/New';
import Loader from './components/Loader/Loader';
import LoaderSmall from './components/Loader/LoaderSmall';
const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  // console.log(user)
  return (
      <>
      <div className='allcontent'>

        {/* <Navbar/> */}
        <Routes>

          <Route path="/" exact element={<Home/>} />
          <Route path="/card" exact element={<Home/>} />
          <Route path="/auth" exact element={<Auth />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/new" element={<New />} />
          <Route path="/contribute" element={<Contribute />} />
          {/* <Route path="/:category" element={<Home category=category />} /> */}
          {/* <Route path="/auth" exact element={() => ((!user || user.length===0) ? <Auth /> : navigate('/'))} /> */}
        </Routes>
      </div>
        <Footer/>
      </>
  );
};

export default App;
