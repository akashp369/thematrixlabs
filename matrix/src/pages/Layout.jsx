import React, { useState } from "react";
import "../styles/Layout.css";
import Home from "./Home";
import SideBar from "../component/SideBar";
import Footer from "../component/Footer";

const Layout = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div style={{ display: "flex", height: "92vh" }}>
        <SideBar />
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
