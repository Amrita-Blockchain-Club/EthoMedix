import React from 'react';
import './Profile.css';
import profile from '../assets/user.png';
import user from "../assets/user.png";

function handleProfileOnClick () {
  return (
    <div className="profile-container" onClick={handleProfileOnClick}>
    </div>
  )
}


const Profile = () => {
  return (
    <div className="user-container" onClick={handleProfileOnClick}>
      <p className="user-name">User</p>
      <img src={user} className="user" />
    </div>
  )
}

export default Profile