import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Web3 from "web3";
import fox from "../assets/Meta.png";
import "./LandingPage.css";
import "./About.css";
import eth from "../assets/eth.png";
import eth1 from "../assets/2672292.png";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div className="aboutpage">
      <Navbar
        pagename1="About Us"
        pagename2="Home"
        pagename3="Contact"
        path1="/"
        path2="/contact"
      />
      <div className="about-container">
        <div className="about-title">nice to meet you </div>
        <div className="about-para"></div>
        <div>
          <img src={eth1} className="about-bg" />
        </div>
      </div>
    </div>
  );
};

export default About;
