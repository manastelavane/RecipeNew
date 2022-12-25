import React, { useEffect,useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";

import { IoArrowBackSharp } from "react-icons/io5";
import FileBase from 'react-file-base64';

import { updateProfile } from "../../actions/auth";
import Input from "../Contribute/Input";
import "./Profile.css";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Profile = () => {
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [profile,setProfile]=useState({name:user?.result?.name,selectedFile:user?.result?.selectedFile,id:user?.result?._id})
  const {authData} = useSelector((state) => state.auth);
  const [open,setOpen]=useState(false)
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(()=>{
    if(authData){
      setUser(authData)
    }else{
      setUser(JSON.parse(localStorage.getItem('profile')))
    }
  },[authData])
  useEffect(()=>{
    navigate('/profile')
  },[user])
  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [navigate, user]);

  const dialogToggle=()=>{
    setOpen(!open)
  }
  const updateprofile=()=>{
    dispatch(updateProfile(profile))
    setOpen(!open)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="container">
        <div className='back' title="Back" onClick={()=>navigate('/')}>
        <IoArrowBackSharp/> 
        </div>
        <h1 style={{textShadow:'0.5px 0.5px black'}}>My Profile</h1>
        <div className="profileContainer">
          <div>
            <img src={user?.result?.selectedFile} alt={user?.result?.name} />
          </div>
          <div className="info">
            <div>
              <h4>Full Name</h4>
              <p>{user?.result?.name}</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>{user?.result?.email}</p>
            </div>
          </div>
        </div>
        <Link className="link" onClick={dialogToggle}>Edit Profile</Link>
      </div>
      <div className="bordercontainer">
        <h1 className="border"></h1>
      </div>
      <br/>
      
      <Dialog
        aria-labelledby="simple-dialog-title"
        open={open}
        onClose={dialogToggle}
        fullScreen={fullScreen}
      >
        <DialogTitle >Update Profile</DialogTitle>
        <DialogContent className="submitDialog">
            <h4>Name:</h4>
            <Input type="text" value={profile.name} handleChange={(e)=>setProfile({...profile,name:e.target.value})}/>
            <h4>Image:</h4>
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setProfile({ ...profile, selectedFile: base64 })} />
        </DialogContent>
        <DialogActions>
            <Button onClick={dialogToggle} color="secondary">
              Cancel
            </Button>
            <Button onClick={updateprofile} color="primary">
              Update
            </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Profile;