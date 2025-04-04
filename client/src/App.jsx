import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import { useLocation } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/loginsignup" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/login" && <Navbar />}

      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
