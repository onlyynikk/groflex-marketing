import React, { useState } from "react";
import "./navbar.css";
import logoName from "../../assets/groflexNameLogo.jpeg";
import { CgClose } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";
import Navlinks from "./Navlinks";
import BtnLight from "../btnLight/BtnLight";
import { Link } from "react-router-dom";
import BtnPrimary from "../btnGreen/BtnPrimary";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo--container">
          <Link to="/">
            <img src={logoName} alt="groflex logo" />
          </Link>
        </div>
        <div className="navbar__link--container">
          <Navlinks />
          <BtnLight text={"Sign in"} />
          <BtnPrimary text={"Sign up for free"} />
        </div>
        <div className="navbar__hamburger--menu">
          {toggleMenu ? (
            <CgClose
              color="green"
              size={35}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiMenu
              color="green"
              size={45}
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && (
            <div className="hamburger__menu">
              <ul>
                <Link to="/" className="hamburger__menu--link">
                  {" "}
                  Home
                </Link>
                <Link to="/" className="hamburger__menu--link">
                  Features
                </Link>
                <Link to="/" className="hamburger__menu--link">
                  Resources
                </Link>
                <Link to="/" className="hamburger__menu--link">
                  <BtnLight text={"Sign in"} />
                </Link>
                <Link to="/" className="hamburger__menu--link">
                  <BtnPrimary text={"Sign Up "} />
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
