import React, { Fragment,useState } from 'react';
import { Routes, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Recipe from './components/Recipe/Recipe';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Contribute from './components/Contribute/Contribute';
import New from './components/New/New';
import Chat from './components/chat/index';

import './App.css'

import io from 'socket.io-client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useSelector } from 'react-redux';


const socket = io.connect('https://recipechatserver.onrender.com/'); 
// const socket = io.connect('https://recipechatserver.onrender.com/'); 

const App = () => {
  const {authData} = useSelector((state) => state.auth);
  console.log(authData)
  return (
      <GoogleOAuthProvider clientId='75616725572-dgct88mvnbm3g10q211jbjot4jq090kn.apps.googleusercontent.com'>
        <div className='allcontent'>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/card" exact element={<Home/>} />
            <Route path="/auth" exact element={<Auth />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/new" element={<New />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path='/chat' element={<Chat username={authData?.result?.name} room={"JavaScript"} socket={socket} />}/>
          </Routes>
        </div>
        <Footer/>
      </GoogleOAuthProvider>
  );
};

export default App;
