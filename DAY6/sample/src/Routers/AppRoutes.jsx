import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import FAQ from "../FAQ";
import Login from "../Login";
import Register from "../Register";
import ForgetPassword from "../ForgetPassword";
import Privacy from "../Privacy";
import Terms from "../Terms";
import Contact from "../Contact";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/faq" element={<FAQ></FAQ>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
