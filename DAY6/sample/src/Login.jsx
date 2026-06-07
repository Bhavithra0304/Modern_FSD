import { useState } from "react";

function Login() {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const email = form.get("email");
    const password = form.get("password");

    const user = JSON.parse(localStorage.getItem("healthnest_user"));

    if (!user) {
      setMsg("Register first.");
      return;
    }

    if (user.email === email && user.password === password) {
      setMsg("Login Successful");
    } else {
      setMsg("Invalid Credentials");
    }
  };

  return (
    <>
      <div className="container form-wrap">
        <div className="form-card">
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" required />
            </div>

            <button className="btn btn-primary">Login</button>
          </form>

          <p>{msg}</p>
        </div>
      </div>
    </>
  );
}

export default Login;
