import "../styles/LoginSignup/LoginSignup.css";
import { useNavigate } from "react-router-dom";
import tasklogo from "../assets/logo.svg";
import { Link } from "react-router-dom";
const LoginSignup = () => {
  return (
    <>
      <div className="loginsignup-body-container">
        <div
          className="signuplogin-container"
          style={{ width: "500px", height: "337px" }}
        >
          <img
            src={tasklogo}
            alt=""
            style={{ width: "332px", height: "55px" }}
          />
          <Link to="/signup">
            <button className="signup-option-btn" style={{ width: "350px" }}>
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="login-option-btn" style={{ width: "350px" }}>
              Log in
            </button>
          </Link>
          <p>
            By signing up you agree to our{" "}
            <span className="terms-privacy"> Terms of Use </span> and <br />{" "}
            <span className="terms-privacy"> Privacy Policy.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
