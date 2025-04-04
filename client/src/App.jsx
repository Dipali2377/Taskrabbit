import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import { useLocation } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/loginsignup" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/login" && <Navbar />}

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
