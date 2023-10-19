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
        <div className="user-balance-profile">Balance: 0 ETH</div>
        <div className="user-did-profile">Did Number</div>
        <div className="user-order-history">
          <h2>Order History</h2>
            <div className="order-details">
              <div className="order-name">Order Name</div>
              <div className="order-price">Order Price</div>
              <div className="order-status">Order Status</div>
            </div>
            <div className="order-details">
              <div className="order-name">med1</div>
              <div className="order-price">0.1 eth</div>
              <div className="order-status">Pending</div>
            </div>
            <div className="order-details">
              <div className="order-name">med2</div>
              <div className="order-price">0.1 eth</div>
              <div className="order-status">Pending</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
