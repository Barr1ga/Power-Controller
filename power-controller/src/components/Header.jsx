import React from "react";
import Logo from "../assets/USJR.png";

export const Header = () => {
  return (
    <>
      <div className="header gap-20">
        <div className="university gap-20">
          <img src={Logo} className="logo" alt="USJR Logo"></img>
          University of San Jose-Recoletos
        </div>
        <div>
          <h2>SHS POWER CONTROLLER</h2>
        </div>
      </div>
      <div className="sub-header-container">
        <span>
          <h4>COMPUTER LABORATORY</h4>
        </span>
      </div>
    </>
  );
};
