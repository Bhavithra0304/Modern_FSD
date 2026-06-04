document.addEventListener("DOMContentLoaded", () => {
  const setMessage = (e, msg, ok = false) => {
    if (!e) return;
    e.textContent = msg;
    e.className = ok ? "success" : "error";
  };

  const emailPattern = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const reg = document.getElementById("registerForm");
  if (reg) {
    const msg = document.getElementById("registerMsg");
    reg.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(reg).entries());
      if (!data.firstName||!data.lastName||!data.email||!data.phone||!data.role||!data.password||!data.confirmPassword) {
        return setMessage(msg, "Please fill all fields.");
      }
      if (!emailPattern(data.email))
        return setMessage(msg, "Enter a valid email address.");
      if (data.password.length < 6)
        return setMessage(msg, "Password must be at least 6 characters.");
      if (data.password !== data.confirmPassword)
        return setMessage(msg, "Passwords do not match.");

      localStorage.setItem(
        "healthnest_user",
        JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          role: data.role,
          password: data.password,
        }),
      );

      setMessage(
        msg,
        "Registration successfully.",
        true,
      );
      reg.reset();
    });
  }

  const login = document.getElementById("loginForm");
  if (login) {
    const msg = document.getElementById("loginMsg");
    login.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(login).entries());
      if (!data.email || !data.password)
        return setMessage(msg, "Please enter email and password.");
      if (!emailPattern(data.email))
        return setMessage(msg, "Enter a valid email address.");

      const user = JSON.parse(
        localStorage.getItem("healthnest_user") || "null",
      );
      if (!user)
        return setMessage(
          msg,
          "No registered user found.Register first.",
        );
      if (user.email !== data.email || user.password !== data.password)
        return setMessage(msg, "Invalid email or password.");

      localStorage.setItem(
        "healthnest_loggedIn",
        JSON.stringify({
          email: user.email,
          name: user.firstName,
        }),
      );

      setMessage(
        msg,
        `Welcome back, ${user.firstName}! Login successful.`,
        true,
      );
      login.reset();
    });
  }

  const forgot = document.getElementById("forgotForm");
  if (forgot) {
    const msg = document.getElementById("forgotMsg");
    forgot.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("resetEmail").value.trim();
      if (!emailPattern(email))
        return setMessage(msg, "Enter a valid email address.");
      localStorage.setItem("healthnest_resetEmail", email);
      setMessage(
        msg,
        "Reset link request saved. Use your backend later to send a real email.",
        true,
      );
      forgot.reset();
    });
  }

  const contact = document.getElementById("contactForm");
  if (contact) {
    const msg = document.getElementById("contactMsg");
    contact.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(contact).entries());
      if (!data.name || !data.email || !data.message)
        return setMessage(msg, "Please fill all contact fields.");
      if (!emailPattern(data.email))
        return setMessage(msg, "Enter a valid email address.");

      const list = JSON.parse(
        localStorage.getItem("healthnest_messages") || "[]",
      );
      list.push({ ...data, time: new Date().toISOString() });
      localStorage.setItem("healthnest_messages", JSON.stringify(list));

      setMessage(msg, "Your message has been saved successfully.", true);
      contact.reset();
    });
  }

  const clearBtns = document.querySelectorAll("[data-clear-storage]");
  clearBtns.forEach((btn) =>
    btn.addEventListener("click", () => localStorage.clear()),
  );
});
