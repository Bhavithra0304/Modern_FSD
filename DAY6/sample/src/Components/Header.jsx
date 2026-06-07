import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";
import image from "../Assets/Images/image.png";

const Header = () => {
  return (
    <header className="navbar">
      <div className="container nav-wrap">
        <Link to="/" className="logo">
          <img src={image} alt="HealthNest Logo" />
        </Link>

        <nav className="nav-menu">
          <Link className="active" to="/">
            Home
          </Link>

          <Link to="/about">About Us</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/faq">FAQ</Link>

          <Link to="/register" className="btn btn-outline">
            Register
          </Link>

          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
