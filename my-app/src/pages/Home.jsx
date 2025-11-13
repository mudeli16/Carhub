import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import bgImage from "../components/fordgt.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="home-container"
      style={{
        backgroundImage:`url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay">
        <div className="content">
          <h1>Welcome to CarHub </h1>
          <p>Find the perfect new or used car from our vast collection.</p>

          <div className="buttons">
            <button className="btn new" onClick={() => navigate("/cars/new")}>
              New Cars
            </button>
            <button className="btn used" onClick={() => navigate("/cars/used")}>
              Used Cars
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;



