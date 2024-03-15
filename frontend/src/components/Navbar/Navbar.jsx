import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.png";
import basket_icon from "../../assets/basket_icon.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-App</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
