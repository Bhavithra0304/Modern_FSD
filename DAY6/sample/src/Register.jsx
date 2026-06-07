import { useState } from "react";

function Register() {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const user = {
      firstName: form.get("firstName"),
      lastName: form.get("lastName"),
      email: form.get("email"),
      phone: form.get("phone"),
      role: form.get("role"),
      password: form.get("password"),
    };

    localStorage.setItem("healthnest_user", JSON.stringify(user));

    setMsg("Registration Successful");
    e.target.reset();
  };

  return (
    <>
      <main className="section">
        <div className="container form-wrap">
          <div className="form-card">
            <h2>Create Account</h2>

            <form onSubmit={handleSubmit}>
              <input name="firstName" placeholder="First Name" required />

              <input name="lastName" placeholder="Last Name" required />

              <input type="email" name="email" placeholder="Email" required />

              <input name="phone" placeholder="Phone" required />

              <select name="role" required>
                <option value="">Select Role</option>
                <option value="Patient">Patient</option>
                <option value="Doctor">Doctor</option>
                <option value="Staff">Staff</option>
              </select>

              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />

              <button className="btn btn-primary">Register</button>
            </form>

            <p>{msg}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Register;
