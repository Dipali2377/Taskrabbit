import React, { useState } from "react";
import "../styles/Signup/Signup.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    zipcode: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  async function handleSignup(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:7000/user/signup",
        formData
      );
      const { data: { message } = {} } = response || {};

      toast.success(message);
      navigate("/login");
    } catch (error) {
      console.log(error);
      const { response: { data: { message } = {} } = {} } = error || {};
      toast.error(message);
    }
  }

  return (
    <div className="auth-page-container">
      <div className="auth-card">
        <h2 className="auth-title">taskrabbit</h2>
        <form className="auth-form" onSubmit={handleSignup}>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="auth-input"
          />
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="auth-input"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="auth-input"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="auth-input"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="auth-input"
          />
          <input
            type="text"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            placeholder="Zip Code"
            required
            className="auth-input"
          />
          <p className="auth-terms">
            By clicking below and creating an account, I agree to TaskRabbit’s
            <span className="auth-link"> Terms of Service </span> and
            <span className="auth-link"> Privacy Policy</span>.
          </p>
          <button type="submit" className="auth-btn">
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
