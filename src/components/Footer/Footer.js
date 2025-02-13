import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to="top">
            <h1 className="logo">😋Tasty Food</h1>
          </Link>
          {/* <img src={assets.logo} alt='404' className='logo'/> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sint
            debitis dolor officiis voluptate ad placeat corrupti amet. Aliquid
            natus dolore beatae rem cumque voluptatem, officiis sint quibusdam
            itaque laborum.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Deleivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 908-873-8107</li>
            <li>Contact@tastyfood.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; TastyFood.com - All Right Reserved.{" "}
      </p>
    </div>
  );
};

export default Footer;
