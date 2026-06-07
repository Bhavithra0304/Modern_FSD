import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="badge">
                <i className="fa-solid fa-heart-pulse" aria-hidden="true"></i>
                Smart Hospital Management
              </span>

              <h1>
                Modern healthcare management made simple, secure, and efficient.
              </h1>

              <p>
                Manage patients, doctors, appointments, billing, records, and
                communication in one professional platform designed for
                hospitals and clinics.
              </p>

              <div className="hero-actions">
                <Link to="/register" className="btn btn-primary">
                  <i className="fa-solid fa-user-plus" aria-hidden="true"></i>
                  Get Started
                </Link>

                <Link to="/contact" className="btn btn-secondary">
                  <i className="fa-solid fa-phone" aria-hidden="true"></i>
                  Contact Us
                </Link>
              </div>

              <div className="stats">
                <div>
                  <strong>24/7</strong>
                  <span>Support</span>
                </div>
                <div>
                  <strong>Secure</strong>
                  <span>Access</span>
                </div>
                <div>
                  <strong>Fast</strong>
                  <span>Workflow</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-card visual-main">
                <img
                  src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/fc05a38bd0bdb5e6c565830e25086020fc4ffa6e.jpg"
                  alt="Modern hospital reception area"
                />
                <div className="visual-overlay">
                  <h3>Trusted Digital Care</h3>
                  <p>
                    Organize hospital operations with clarity and confidence.
                  </p>
                </div>
              </div>

              <div className="visual-panel">
                <div className="visual-item">
                  <i className="fa-solid fa-user-doctor" aria-hidden="true"></i>
                  <div>
                    <h4>Doctor Management</h4>
                    <p>Organize schedules and departments.</p>
                  </div>
                </div>

                <div className="visual-item">
                  <i
                    className="fa-solid fa-calendar-check"
                    aria-hidden="true"
                  ></i>
                  <div>
                    <h4>Appointments</h4>
                    <p>Book and track patient visits easily.</p>
                  </div>
                </div>

                <div className="visual-item">
                  <i
                    className="fa-solid fa-notes-medical"
                    aria-hidden="true"
                  ></i>
                  <div>
                    <h4>Medical Records</h4>
                    <p>Store and access patient data securely.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Core Features</h2>
            <div className="feature-grid">
              <article className="feature-box">
                <div className="feature-icon">
                  <i
                    className="fa-solid fa-hospital-user"
                    aria-hidden="true"
                  ></i>
                </div>
                <h3>Patient Management</h3>
                <p>
                  Register patients, update profiles, and maintain medical
                  records.
                </p>
              </article>

              <article className="feature-box">
                <div className="feature-icon">
                  <i className="fa-solid fa-stethoscope" aria-hidden="true"></i>
                </div>
                <h3>Appointment Booking</h3>
                <p>Schedule visits, manage queues, and reduce waiting time.</p>
              </article>

              <article className="feature-box">
                <div className="feature-icon">
                  <i
                    className="fa-solid fa-file-invoice-dollar"
                    aria-hidden="true"
                  ></i>
                </div>
                <h3>Billing & Payments</h3>
                <p>
                  Handle invoices, receipts, and payment tracking efficiently.
                </p>
              </article>

              <article className="feature-box">
                <div className="feature-icon">
                  <i className="fa-solid fa-chart-line" aria-hidden="true"></i>
                </div>
                <h3>Reports & Analytics</h3>
                <p>View dashboards and generate operational reports quickly.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
