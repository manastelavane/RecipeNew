import React, { Fragment, useEffect,useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
// import { useSelector } from "react-redux";
// import MetaData from "../layout/MetaData";
// import Loader from "../layout/Loader/Loader";
import FileBase from 'react-file-base64';
import { updateProfile } from "../../actions/auth";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
// import { DialogProps } from '@mui/material/Dialog';
import { Link,useNavigate } from "react-router-dom";
import "./Profile.css";
import Input from "../Contribute/Input";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useDispatch,useSelector } from "react-redux";

const Profile = () => {
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const {authData} = useSelector((state) => state.auth);
    useEffect(()=>{
      if(authData){
        setUser(authData)
      }else{
        setUser(JSON.parse(localStorage.getItem('profile')))
      }
    },[authData])
    const [open,setOpen]=useState(false)
    const navigate=useNavigate();
    const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    // console.log(authData)
    const [profile,setProfile]=useState({name:user?.result?.name,selectedFile:user?.result?.selectedFile,id:user?.result?._id})
    // console.log(profile)
    const dispatch=useDispatch()
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
            <h4 style={{textAlign:'center'}}>No Recipes Contributed by you yet...</h4>
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
        {/* <Button onClick={submitReviewToggle} color="secondary"> */}
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