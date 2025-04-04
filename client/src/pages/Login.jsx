import React from "react";
import "../styles/Login/Login.css";

const Login = () => {
  return (
    <div className="login-page-container">
      <div className="login-card">
        <h2 className="login-title">taskrabbit</h2>
        <form className="login-form">
          <label className="email-label">Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            required
            className="login-input"
          />

          <label className="email-label">Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            className="login-input"
          />

          <a href="#" className="forgot-password">
            Forgot password?
          </a>

          <button type="submit" className="loginn-btn">
            Log in
          </button>

          <p className="signup-link">
            Did you purchase an assembly from IKEA or sign up via Facebook or
            Google?
            <a href="#"> Create Password</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
