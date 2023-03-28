import React, { useState, useEffect } from "react";
import "./hamburgermenu.css";
import { Link } from "react-router-dom";
import BtnLight from "../../btnLight/BtnLight";
import BtnPrimary from "../../btnGreen/BtnPrimary";
import rocket from "../../../assets/rocket.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import OnClickOutside from "../../onClickOutside/OnClickOutside";
OnClickOutside;

export default function HamburgerMenu({ setToggle }) {
  const [featuresArrow, setfeaturesArrow] = useState(false);
  const [resourcesArrow, setresourcesArrow] = useState(false);

  function handleFeaturesClick() {
    setfeaturesArrow(!featuresArrow);
    setresourcesArrow(false);
  }

  function handleResourcesClick() {
    setresourcesArrow(!resourcesArrow);
    setfeaturesArrow(false);
  }

  function handleScroll() {
    setToggle(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hamburger__menu--container">
      <hr style={{ border: "1px solid #0071ca" }} />
      <div className="hamburger__menu--links">
        <Link
          className="hamburger__menu--link"
          onClick={() => setToggle(false)}
        >
          Home
        </Link>
        <Link className="hamburger__menu--link" onClick={handleFeaturesClick}>
          Features <IoIosArrowDown />
        </Link>
        {featuresArrow && (
          <div className="dropdown__link">
            <Link
              to="features/invoice-and-quotation"
              className="hamburger__menu--link"
              onClick={() => setToggle(false)}
            >
              Invoice And Quotation
            </Link>
          </div>
        )}
        <Link className="hamburger__menu--link" onClick={handleResourcesClick}>
          Resources <IoIosArrowDown />
        </Link>
        {resourcesArrow && (
          <div className="dropdown__link">
            <Link
              to="https://blog.groflex.in/"
              className="hamburger__menu--link"
              onClick={() => setToggle(false)}
            >
              Blogs
            </Link>
          </div>
        )}
      </div>
      <hr style={{ border: "1px solid #0071ca" }} />
      <div className="hamburger__menu--buttons">
        <div className="hamburger__menu--btn">
          <BtnLight text={"Sign In"} />
        </div>
        <div className="hamburger__menu--btn">
          <BtnPrimary text={"Sign Up for free"} />
        </div>
      </div>
    </div>
  );
}

//  <div className="hamburger__menu--links">
//    <Link to="/" className="hamburger__menu--link">
//      Home
//    </Link>
//    <OnClickOutside onClickOutside={setfeaturesArrow(false)}>
//      <Link
//        className={featuresArrow ? "navbar__link--hover" : "navbar__link"}
//        onClick={() => setfeaturesArrow(!featuresArrow)}
//      >
//        Features
//        {!featuresArrow ? (
//          <IoIosArrowDown className="navbar__icon" />
//        ) : (
//          <IoIosArrowUp className="navbar__icon" />
//        )}
//      </Link>
//    </OnClickOutside>
//    <OnClickOutside onClickOutside={setresourcesArrow(false)}>
//      <Link
//        className={resourcesArrow ? "navbar__link--hover" : "navbar__link"}
//        onClick={() => setresourcesArrow(!resourcesArrow)}
//      >
//        Resources
//        {!resourcesArrow ? (
//          <IoIosArrowDown className="navbar__icon" />
//        ) : (
//          <IoIosArrowUp className="navbar__icon" />
//        )}
//      </Link>
//    </OnClickOutside>

//    <hr style={{ border: "1px solid #0071CA" }} />
//    {/* <div className="hamburger__menu--buttons"> */}
//    <Link to="https://app.groflex.io/" className="hamburger__menu--btn-light">
//      Sign in
//    </Link>
//    <Link to="https://app.groflex.io/" className="hamburger__menu--btn-green">
//      <img src={rocket} alt="rocket" className="btn__icon" />
//      Sign up for free
//    </Link>
//    {/* </div> */}
//  </div>;
