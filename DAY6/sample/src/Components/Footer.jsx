import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>CareLink</h3>
          <p>
            A professional hospital management system for modern healthcare
            operations.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faq">FAQ</Link>
        </div>

        <div>
          <h4>Legal</h4>
          <Link to="/terms">Terms and Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        <div>
          <h4>Account</h4>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/forgot-password">Forgot Password</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2026 CareLink Hospital Management System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
