import React from "react";
import "./LandingPage.css";
import image1 from "../assets/image1.jpeg";
import fox from "../assets/Meta.png";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  AOS.init();

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
      <div 
      // data-aos="fade-up" data-aos-delay="300" 
      className="secret-heading">
        WHY ETHoMedix ??
      </div>
      <div className="para1">
        <div className="para1-title">Enhanced Data Security</div>
        <div className="para1-subtitle">
          EthoMedix is a Decentralized clinical trial platform <br /> that
          allows Researchers to conduct clinical trials <br /> that are more
          Secure, Transparent, and Efficient.
        </div>
        <img src={image1} className="image1" />
      </div>
      <div className="para2">
        <div className="para2-title">Anonymous Participation</div>
        <div className="para2-subtitle">
          EthoMedix's integration of DIDs empowers <br /> anonymous user
          involvement in clinical trials, <br /> preserving personal information
          privacy.
        </div>
        <img src={image2} className="image2" />
      </div>
      <div className="para3">
        <div className="para3-title">Efficient Data Verification</div>
        <div className="para3-subtitle">
          By securely storing decentralized identities on <br /> the blockchain,
          EthoMedix balances anonymity <br /> with data verification, fostering
          trust among <br /> stakeholders.
        </div>
        <img src={image3} className="image3" />
      </div>
      <div className="para4">
        <div className="para4-title">Technical Expertise</div>
        <div className="para4-subtitle">
          EthoMedix thoroughly explores the technical <br /> intricacies of
          DIDs, guaranteeing a <br /> seamless and secure experience for both{" "}
          <br /> patients and researchers.
        </div>
        <img src={image4} className="image4" />
      </div>
      <div className="para5">
        <div className="para5-title">Streamlined Consent Management</div>
        <div className="para5-subtitle">
          EthoMedix simplifies consent procedures, ensuring <br /> a
          user-friendly experience for patients & researchers <br /> ultimately
          saving time & effort.
        </div>
        <img src={image5} className="image5" />
      </div>
      <div className="para6">
        <div className="para6-title">Real-World Impact</div>
        <div className="para6-subtitle">
          EthoMedix demonstrates its potential with real-world <br /> case
          studies, offering practical insights & highlighting <br /> its
          capacity to revolutionize the pharmaceutical <br /> industry's
          approach to clinical trials.
        </div>
        <img src={image6} className="image6" />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default LandingPage;
