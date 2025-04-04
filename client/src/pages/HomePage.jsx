import left from "../assets/left-img.jpeg";
import right from "../assets/right-img.jpeg";
import serviceProvider from "../assets/service-provider.png";
import "../styles/Home/Home.css";
import services from "../assets/services.png";
import assembly from "../assets/HomePage_Assembly.webp";
import { FaSearch } from "react-icons/fa";
import data from "../assets/data.png";
import first from "../assets/PopularProjects/first.webp";
import second from "../assets/PopularProjects/second.webp";
import third from "../assets/PopularProjects/third.webp";
import fourth from "../assets/PopularProjects/fourth.webp";
import fifth from "../assets/PopularProjects/fifth.webp";
import sixth from "../assets/PopularProjects/sixth.webp";
import seven from "../assets/PopularProjects/seven.webp";
import eight from "../assets/PopularProjects/eight.webp";
import gethelp from "../assets/gethelp.jpeg";
import CustomerReviews from "../components/CustomerReviews";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="left-section">
          <img src={left} alt="" className="left-img" />
          <img src={serviceProvider} alt="" className="service-img" />
        </div>
        <div className="mid-section">
          <h1>
            Book trusted help <br /> for home tasks
          </h1>
          <div class="search-container">
            <input
              type="text"
              class="search-input"
              placeholder="What do you need help with?"
            />
            <button class="search-button">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="right-section">
          <img src={right} alt="" className="right-img" />
        </div>
      </div>
      <div className="services-container">
        <img src={services} alt="" className="services-img" />
      </div>

      <div className="assembly-container">
        <div className="inner-div">
          <div className="text-content">
            <h2>Assembly</h2>
            <ul>
              <li>
                Assemble or disassemble furniture items by unboxing, building,
                and any cleanup.
              </li>
              <li>
                Now Trending: Curved sofas, computer desks, and sustainable
                materials.
              </li>
            </ul>
          </div>
        </div>
        <img
          src={assembly}
          alt=""
          style={{ height: "491px", width: "950px" }}
          className="assembly-img"
        />
        <img src={data} alt="" />
      </div>

      <h1 className="popular-projects">Popular Projects</h1>
      <div className="popular-projects-container">
        <div>
          <img src={first} alt="" />
          <h4>Furniture Assembly</h4>
          <p>Projects starting at $49</p>
        </div>
        <div>
          <img src={second} alt="" />
          <h4>Mount Art or Shelves</h4>
          <p>Projects starting at $65</p>
        </div>
        <div>
          <img src={third} alt="" />
          <h4>Mount a TV</h4>
          <p>Projects starting at $69</p>
        </div>
        <div>
          <img src={fourth} alt="" />
          <h4>Help Moving</h4>
          <p>Projects starting at $67</p>
        </div>
        <div>
          <img src={fifth} alt="" />
          <h4>Home & Apartment Clea...</h4>
          <p>Projects starting at $49</p>
        </div>
        <div>
          <img src={sixth} alt="" />
          <h4>Minor Plumbing Repairs</h4>
          <p>Projects starting at $65</p>
        </div>
        <div>
          <img src={seven} alt="" />
          <h4>Electrical Help</h4>
          <p>Projects starting at $69</p>
        </div>
        <div>
          <img src={eight} alt="" />
          <h4>Heavy Lifting</h4>
          <p>Projects starting at $61</p>
        </div>
      </div>
      <CustomerReviews />
      <img src={gethelp} alt="" />
    </>
  );
};

export default Home;
