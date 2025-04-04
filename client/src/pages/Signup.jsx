import React from "react";
import "../styles/Signup/Signup.css";

const Signup = () => {
  return (
    <div className="auth-page-container">
      <div className="auth-card">
        <h2 className="auth-title">taskrabbit</h2>
        <form className="auth-form">
          <input
            type="text"
            placeholder="First Name"
            required
            className="auth-input"
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            className="auth-input"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="auth-input"
          />
          <input
            type="text"
            placeholder="Phone Number"
            required
            className="auth-input"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="auth-input"
          />
          <input
            type="text"
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
