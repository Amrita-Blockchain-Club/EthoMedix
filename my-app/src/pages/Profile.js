import React from "react";
import "./Profile.css";
import profile from "../assets/user.png";
import user from "../assets/user.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import bg from "../assets/profile-bg.png";

const Profile = () => {
  var address = localStorage["address"];
  return (
    <div>
      <Navbar address={address}/>
      <div className="profile-page">
          <img src={bg} className="user-bg-image" />
        <img src={user} className="user-image" />
        <div className="user-name-profile">Unknown</div>
        <div className="user-address-profile">{address}</div>
      </div>
    </div>
  );
};

export default Profile;
