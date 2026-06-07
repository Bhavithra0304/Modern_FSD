import { useState } from "react";

function ForgotPassword() {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = new FormData(e.target).get("email");

    localStorage.setItem("healthnest_resetEmail", email);

    setMsg("Reset request saved.");
  };

  return (
    <>
      <div className="container form-wrap">
        <div className="form-card">
          <h2>Forgot Password</h2>

          <form onSubmit={handleSubmit}>
            <input type="email" name="email" required />

            <button className="btn btn-primary">Send Reset Link</button>
          </form>

          <p>{msg}</p>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
