import React, { useState } from "react";
import "./navbar.css";
import logoName from "../../assets/groflexNameLogo.jpeg";
import { CgClose } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";
import Navlinks from "./Navlinks";
import BtnLight from "../btnLight/BtnLight";
import { Link } from "react-router-dom";
import BtnPrimary from "../btnGreen/BtnPrimary";
import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";
import OnClickOutside from "../onClickOutside/OnClickOutside";
import OnScroll from "../onScroll/onScroll";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggleAndScroll() {}

  return (
    <>
      <OnClickOutside onClickOutside={() => setToggleMenu(false)}>
        <div className="navbar">
          <div className="navbar__logo--container">
            <Link
              className="navbar-logo-img"
              to="/"
              onClick={() => setToggleMenu(false)}
            >
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
          </div>
        </div>

        {toggleMenu && <HamburgerMenu setToggle={setToggleMenu} />}
      </OnClickOutside>
    </>
  );
}
