import React from "react";
import "./Header.css";
import logo from "/logo.jpeg";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <a href="/home">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contacts">Contact Us</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
