import { useState } from "react";

function Contact() {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const data = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    const messages = JSON.parse(
      localStorage.getItem("healthnest_messages") || "[]",
    );

    messages.push(data);

    localStorage.setItem("healthnest_messages", JSON.stringify(messages));

    setMsg("Message saved successfully.");
    e.target.reset();
  };

  return (
    <>
      <main className="section">
        <div className="container">
          <h2>Contact Us</h2>

          <div className="grid-2">
            <div className="info-card">
              <h3>Contact Details</h3>
              <p>Email: support@healthnest.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: Chennai, Tamil Nadu</p>
            </div>

            <div className="form-card">
              <h3>Send Message</h3>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input name="name" required />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" required />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" required />
                </div>

                <button className="btn btn-primary">Send Message</button>
              </form>

              <p className="success">{msg}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
