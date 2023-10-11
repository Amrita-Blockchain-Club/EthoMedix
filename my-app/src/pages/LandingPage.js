import React from "react";
import "./LandingPage.css";
import image1 from "../assets/image1.jpeg";
import fox from "../assets/Meta.png";

const LandingPage = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-container">
          <div className="slogan">ETHoMedix</div>
          <div className="navbar-links">
            <div className="about">About</div>
            <div className="contact">Contact</div>
            <div className="connect-wallet">Connect Wallet</div>
            <img src={fox} className="fox" />
          </div>
        </div>
      </div>
      <div className="body">
        <div className="title">EthoMedix</div>
        <div className="subtitle">
          Blockchain-based clinical drug trial platform that helps <br />
          Researchers to conduct clinical trials that are more <br />
          Secure, Transparent, and Efficient.
        </div>
        </div>
        <div className="secret-heading">WHY ETHoMedix ??</div>
        <div className="para1">
          <div className="para1-title">Enhanced Data Security</div>
          <div className="para1-subtitle">
            EthoMedix is a Decentralized clinical trial platform  <br /> that
            allows Researchers to conduct clinical trials <br /> that are more
            Secure, Transparent, and Efficient.
          </div>
          <img src={image1} className="image1" />
        </div>
      <div className="para2">
        <div className="para2-title">Anonymous Participation</div>
        <div className="para2-subtitle">
          EthoMedix's integration of DIDs empowers anonymous user involvement in
          clinical trials, preserving personal information privacy.
        </div>
      </div>
      {/* <div className="para3">
        <div className="para3-title">Efficient Data Verification</div>
        <div className="para3-subtitle">
          By securely storing decentralized identities on the blockchain,
          EthoMedix balances anonymity with data verification, fostering trust
          among stakeholders.
        </div>
      </div> */}
      {/* <div className="para4">
        <div className="para4-title">Technical Expertise</div>
        <div className="para4-subtitle">
          EthoMedix thoroughly explores the technical intricacies of DIDs,
          guaranteeing a seamless and secure experience for both patients and
          researchers.
        </div>
      </div> */}
      {/* <div className="para5">
        <div className="para5-title">Streamlined Consent Managemen</div>
        <div className="para5-subtitle">
          EthoMedix simplifies consent procedures, ensuring a user-friendly
          experience for patients and researchers, ultimately saving time and
          effort.
        </div>
      </div> */}
      {/* <div className="para6">
        <div className="para6-title">Real-World Impact</div>
        <div className="para6-subtitle">
          EthoMedix demonstrates its potential with real-world case studies,
          offering practical insights and highlighting its capacity to
          revolutionize the pharmaceutical industry's approach to clinical
          trials.
        </div>
      </div> */}
    </div>
  );
};

export default LandingPage;
