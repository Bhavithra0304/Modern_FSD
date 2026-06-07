import React from 'react' 

function FAQ() {
  return (
    <>
      <div className="container">
        <h2>Frequently Asked Questions</h2>

        <div className="grid-2">
          <div className="faq-item">
            <h3>How do I register?</h3>
            <p>Create an account from Register page.</p>
          </div>

          <div className="faq-item">
            <h3>How do I reset password?</h3>
            <p>Use Forgot Password page.</p>
          </div>

          <div className="faq-item">
            <h3>Can staff use system?</h3>
            <p>Yes, staff and doctors can use it.</p>
          </div>

          <div className="faq-item">
            <h3>Is system secure?</h3>
            <p>Yes, role-based access is supported.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
