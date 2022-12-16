import React, { Fragment, useEffect,useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
// import { useSelector } from "react-redux";
// import MetaData from "../layout/MetaData";
// import Loader from "../layout/Loader/Loader";
import { Link,useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const navigate=useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [navigate, user]);
  return (
    <>
    <div className="container">
        <div className='back' title="Back" onClick={()=>navigate('/')}>
       <IoArrowBackSharp/> 
      </div>
              <h1>My Profile</h1>
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
            <Link className="link" to="/me/update">Edit Profile</Link>
            </div>
            <h1 className="border"></h1>
            <br/>
            <h4>No Recipes Contributed by you yet...</h4>
        
        </>
  );
};

export default Profile;