import React, { useState } from "react";
import "./navbar.css";
// import logoName from "../../assets/groflexNameLogo.jpeg";
import logo from "../../assets/logo.png";
import { CgClose } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";
import Navlinks from "./Navlinks";
import BtnLight from "../btnLight/BtnLight";
import { Link } from "react-router-dom";
import BtnPrimary from "../btnGreen/BtnPrimary";
import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";
import OnClickOutside from "../onClickOutside/OnClickOutside";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggleAndScroll() {}

  return (
    <>
      <OnClickOutside onClickOutside={() => setToggleMenu(false)}>
        <div className="navbar">
          <div
            className="navbar__logo--container"
            onClick={() => window.scrollTo(0, 0)}
          >
            <Link
              className="navbar-logo-img"
              to="/"
              onClick={() => setToggleMenu(false)}
            >
              <img src={logo} alt="groflex logo" />
            </Link>
          </div>
          <div className="navbar__link--container">
            <Navlinks />
          </div>
          <div className="navbar__button--container">
            <BtnLight text={"Sign in"} to={"https://app.groflex.in/"} />
            <BtnPrimary
              text={"Sign up for free"}
              to={"https://app.groflex.in/"}
            />
          </div>

          <div className="navbar__hamburger--menu">
            {toggleMenu ? (
              <CgClose
                color="gray"
                size={35}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <HiMenu
                color="green"
                size={30}
                onClick={() => setToggleMenu(true)}
              />
            )}
          </div>
        </div>

        {toggleMenu && <HamburgerMenu setToggle={setToggleMenu} />}
      </OnClickOutside>
    </>
  );
}

{
  /* <OnClickOutside onClickOutside={() => setToggleMenu(false)}>
        <div className="navbar">
          <div
            className="navbar__logo--container"
            onClick={() => window.scrollTo(0, 0)}
          >
            <Link
              className="navbar-logo-img"
              to="/"
              onClick={() => setToggleMenu(false)}
            >
              <img src={logo} alt="groflex logo" />
            </Link>
          </div>
          <div className="navbar__link--container">
            <Navlinks />
            <BtnLight text={"Sign in"} to={"https://app.groflex.in/"} />
            <BtnPrimary
              text={"Sign up for free"}
              to={"https://app.groflex.in/"}
            />
          </div>

          <div className="navbar__hamburger--menu">
            {toggleMenu ? (
              <CgClose
                color="gray"
                size={35}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <HiMenu
                color="green"
                size={30}
                onClick={() => setToggleMenu(true)}
              />
            )}
          </div>
        </div>

        {toggleMenu && <HamburgerMenu setToggle={setToggleMenu} />}
      </OnClickOutside>
    </> */
}
