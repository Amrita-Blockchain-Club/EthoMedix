import React from "react";
import Navbar from "./Navbar";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-page">
        <h1>Contact Us</h1>
        <div className="contact-form">
          <div className="contact-name">
            <label htmlFor="name"> Name</label>
            <input type="text" id="name" />
          </div>
          <div className="contact-email">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div className="contact-message">
            <label htmlFor="message">Message</label>
            <textarea id="message" />
          </div>
          <button className="contact-submit">Submit</button>
        </div>
        </div>
    </div>
  );
};

export default Contact;
