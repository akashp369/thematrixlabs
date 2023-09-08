import React from "react";
import "../styles/Home.css";
import AllRoute from "../route/AllRoute";

const Home = () => {
  return (
    <div className="home_container" style={{ width: "80%", padding:"1.5rem" }}>
      <AllRoute />
    </div>
  );
};

export default Home;
