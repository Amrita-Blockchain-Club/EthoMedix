import React from "react";
import "./Profile.css";
import profile from "../assets/user.png";
import user from "../assets/user.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function handleProfileOnClick() {
  document.getElementsByClassName("user-container").style.visibility = "hidden";
}

const Profile = () => {
  var address = localStorage["address"];
  return (
    <div>
      <Navbar address={address}/>
      <div className="profile-page">
        <div className="user-bg-image"></div>
        <div className="profile-container">
          <div className="profile-details"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
