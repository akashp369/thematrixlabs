import React, { useState } from "react";
import "../styles/SideBar.css"
import Vector from "../asset/Vector.png";
import ic_baseline from "../asset/ic_baseline.png";
import NFTify from "../asset/NFTify.png";
import fluent from "../asset/fluent.png";
import facebook from "../asset/facebook.png";
import twitter from "../asset/twitter.png";
import linkedin from "../asset/linkedin.png";
import { Link } from "react-router-dom";

const SideBar = () => {
    const[bgc, setBgc]=useState(false)
  return (
    <div style={{ width: "20%" }} className="sideBar_main">
      <div className="sidebar_menu">
        <div className="menuOne">
          <div className="logo">
            <img src={Vector} alt="" />
            <img src={NFTify} alt="" />
          </div>
          <Link to="/" style={{textDecoration:"none"}}>
          <div className="second_logo" onClick={()=>setBgc(false)} style={{backgroundColor:!bgc?"#F30050":"#292929"}}>
            <img src={ic_baseline} alt="" />
            <p>Token Address</p>
          </div>
          </Link>
          <Link to="/pair" style={{textDecoration:"none"}}>
          <div className="second_logo" onClick={()=>setBgc(true)} style={{backgroundColor:bgc?"#F30050":"#292929"}}>
          <img src={fluent} alt="" />
            <p>Pair Address</p>
          </div>
          </Link>
        </div>
        <div className="menuTwo">
            <img src={facebook} alt="" />
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
