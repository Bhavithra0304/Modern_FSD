import React from 'react' 
function About() {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2>About Our System</h2>

          <div className="grid-2">
            <article className="info-card">
              <h3>Our Mission</h3>
              <p>
                To simplify hospital operations with a secure, fast and
                user-friendly digital platform.
              </p>
            </article>

            <article className="info-card">
              <h3>Our Vision</h3>
              <p>
                To help healthcare providers deliver better patient care through
                smart technology.
              </p>
            </article>
          </div>

          <div className="section">
            <div className="grid-3">
              <article className="feature-box">
                <h3>Reliable</h3>
                <p>Designed for stable day-to-day hospital workflows.</p>
              </article>

              <article className="feature-box">
                <h3>Secure</h3>
                <p>Supports role-based access and protected records.</p>
              </article>

              <article className="feature-box">
                <h3>Scalable</h3>
                <p>Can grow from a small clinic to a large hospital system.</p>
              </article>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
