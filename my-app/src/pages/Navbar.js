import React from "react";
import fox from "../assets/Meta.png";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Web3 from "web3";
import Profile from "./Profile";
import user from "../assets/user.png";

const Profilego = () => {
  console.log("profile");
  return (
    <div>
      <Link
        to="/profilepage"
        className="user-container user-container-profile"
      ></Link>
      <div className="user-container">
        <p className="user-name">User</p>
        <img src={user} className="user" />
      </div>
    </div>
  );
};

function MetaMaskConnect(props) {
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
          localStorage["address"] = selectedAccount;
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

  if (isempty) {
    return (
      <div>
        <div
          className="connect-wallet"
          onClick={() => {
            connectingMetamask();
          }}
        >
          <p>Connect Wallet</p>
        </div>
        <img src={fox} className="fox" />
      </div>
    );
  } else {
    return (
      <div>
        <Profilego />
      </div>
    );
  }
}

const Navbar = (props) => {
  var address = props.address;
  if (address === 0) {
    return (
      <div>
        <section className="navbar">
          <div className="navbar-container">
            <Link to="/">
              <div className="slogan">ETHoMedix</div>
            </Link>
            <div className="navbar-links">
              <Link to="/about">
                <div className="about">About</div>
              </Link>
              <Link to="/contact">
                <div className="contact">Contact</div>
              </Link>
              <MetaMaskConnect />
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <section className="navbar">
          <div className="navbar-container">
            <Link to="/">
              <div className="slogan">ETHoMedix</div>
            </Link>
            <div className="navbar-links">
              <Link to="/about">
                <div className="about">About</div>
              </Link>
              <Link to="/contact">
                <div className="contact">Contact</div>
              </Link>
              <Profilego />
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Navbar;
