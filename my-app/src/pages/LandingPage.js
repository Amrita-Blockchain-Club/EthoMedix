import React, { useEffect, useState } from "react";
import Web3 from "web3";
import fox from "../assets/Meta.png";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import "./LandingPage.css";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  // address
  let [address, changeaddress] = useState("");
  let [isempty, changeisEmpty] = useState(address.length === 0 ? true : false);

  useEffect(() => {
    address.length === 0 ? changeisEmpty(true) : changeisEmpty(false);
  }, [address]);

  const connectingMetamask = () => {
    // we need to open the metamask to connect our wallet address
    async function MetaMaskConnect(changeaddress) {
      if (window.ethereum) {
        try {
          // Requesting to access the accounts in the meta mask
          await window.ethereum.request({ method: "eth_requestAccounts" });
          console.log("MetaMask is connected");
          // Now we can use the provider to interact with the blockchain
          const web3 = new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();
          const selectedAccount = accounts[0]; //* we are going to the first account in the metamask
          console.log("Selected account:", selectedAccount);
          //* adding this address to the state of the Application
          changeaddress(selectedAccount);
          // You can now perform other operations with the selected account
        } catch (error) {
          console.error("Error connecting to MetaMask:", error);
        }
      } else {
        console.error("Please install MetaMask to use this feature");
      }
    }
    MetaMaskConnect(changeaddress);
    //* When the account was successfully connected then the button color will be changes to color green
  };

  return (
    <div>
      <section className="navbar">
        <div className="navbar-container">
          <div className="slogan">ETHoMedix</div>
          <div className="navbar-links">
            <Link to="/about" >
              <div className="about">About</div>
            </Link>
            <div className="contact">Contact</div>
            <div
              className={`${isempty ? "connect-wallet" : "connect-wallet-1"}`}
              onClick={connectingMetamask}
            >
              {`${isempty ? "Connect Wallet" : "Connected"}`}
            </div>
            <img src={fox} className={`${isempty ? "fox" : ""}`} />
          </div>
        </div>
      </section>
      <div className="body">
        <img src={image7} className="image7" />
        <div className="title">EthoMedix</div>
        <div className="subtitle">
          This is a decentralized clinical trial platform that allows <br/> researchers to conduct clinical trials that are <br/> more secure, transparent, and efficient.
        </div>
      </div>
      <div
        // data-aos="fade-up" data-aos-delay="300"
        className="secret-heading"
      >
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
      <section className="footer">
        <div className="footer-title">Made by Team Binary</div>
        <div className="footer-subtitle">
          We are a team of 5 developers who are passionate about Blockchain and
          its applications.
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
