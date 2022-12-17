import { useState} from 'react';
import {MenuData} from "./MenuData"
import './NavbarStyles.css'
import React from 'react'
import logo from '../../images/Websitelogo.jpeg' 
import { Link } from 'react-router-dom';
import {  Typography, Toolbar, Avatar, Button, makeStyles } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actionType from '../../constants/actionTypes';
const Navbar = () => {
    const [clicked,setClicked]=useState(false);
    const [scrolling,setScrolling]=useState(false)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const handleClick=()=>{
        setClicked(!clicked)
    }
    const classes = useStyles();
    const handlescroll=()=>{
        if(window.pageYOffset<=50){
            setScrolling(false)
        }else{
            setScrolling(true)
        }
    }
    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        navigate('/auth');
    
        setUser(null);
      };
      console.log(user)
    window.addEventListener('scroll',handlescroll);
    function trimname(name){
        var i=name.indexOf(' ');
        name=name.substr(0,i);
        if(name.length>10) return makeStyles.substr(0,10);
        else return name;
    }
  return (
    <div>
      <nav className={scrolling?"NavbarItems scrolling":"NavbarItems"}>
                <h1 className='logo'><img src={logo} height="50px" width="50px" alt='cookwell'/>COOKWELL </h1>
                <div className='menu-icons' onClick={handleClick}>
                    <i className={clicked?"fas fa-times":"fas fa-bars"}></i>
                </div>
            <ul className={clicked?"nav-menu active":"nav-menu"}>
                {MenuData.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link to={item.url} className={item.cName}>
                                <i className={item.icon}></i>{item.title}
                            </Link>
                        </li>
                    )
                })}
                <li key='Sign Up' className='signup'>
                <Toolbar className={classes.toolbar}>
                    {user?.result ? (
                    <div className={classes.profile}>
                        {/* <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar> */}
                        
                        <Avatar onClick={()=>navigate('/profile')} className={classes.purple} alt={user?.result.name} src={user?.result?.selectedFile}></Avatar>
                        <Typography onClick={()=>navigate('/profile')} className="userName" variant="h6">{trimname(user?.result.name)}</Typography>
                        
                        <Button variant="contained" className={classes.logout} color="secondary" size="small" onClick={logout}>Logout</Button>
                    </div>
                    ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                    )}
                </Toolbar>
                </li>
            </ul>
            </nav>
    </div>
  )
}

export default Navbar
