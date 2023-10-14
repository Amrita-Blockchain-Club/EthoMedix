import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Web3 from "web3";
import fox from "../assets/Meta.png";
import "./LandingPage.css";

const About = () => {

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
            <Link to="/" >
              <div className="about">Home</div>
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
      <section className="footer-about">
        <div className="footer-title">Made by Team Binary</div>
        <div className="footer-subtitle">
          We are a team of 5 developers who are passionate about Blockchain and
          its applications.
        </div>
      </section>
    </div>
  )
}

export default About