import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "../styles/Navbar/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo-div">
          <img src={logo} alt="" className="logo-img" />
        </div>

        <div className="menu-div">
          <Link className="menu">Services</Link>
          <Link className="menu">SignUp/Login</Link>
          <button className="tasker-btn">Become a Tasker</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
