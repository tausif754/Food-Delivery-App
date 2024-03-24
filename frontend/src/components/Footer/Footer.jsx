import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            exercitationem, voluptatem voluptates, reprehenderit, culpa optio id
            velit molestiae perspiciatis rerum illo nesciunt? Saepe placeat, id
            eaque non deserunt asperiores tenetur!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+7761080462</li>
            <li>tausifahmad8473@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        Copyright 2024 © Tomato.com- All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
