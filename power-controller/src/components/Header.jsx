import React from "react";
import Logo from "../assets/USJR.png";
import { BiBuilding } from "react-icons/bi";

export const Header = () => {
  return (
    <>
      <div className="header gap-20">
        <div className="university gap-10">
          <img src={Logo} className="logo" alt="USJR Logo"></img>
        </div>
        <div>
          <h4>University of San Jose-Recoletos</h4>
          <h3>SHS POWER CONTROLLER</h3>
        </div>
      </div>
      <div className="sub-header-container">
        <span>
          <h4 className="gap-5"><BiBuilding></BiBuilding> COMPUTER LABORATORY</h4>
        </span>
      </div>
    </>
  );
};
