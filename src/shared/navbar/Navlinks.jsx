import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import OnClickOutside from "../onClickOutside/OnClickOutside";

export default function Navlinks() {
  const [featuresArrow, setfeaturesArrow] = useState(false);
  const [resourcesArrow, setresourcesArrow] = useState(false);

  return (
    <div className="navbar__links--wrapper">
      <Link className="navbar__link space-right" to="/">
        Home
      </Link>
      <div className="dropdown__container">
        <OnClickOutside onClickOutside={() => setfeaturesArrow(false)}>
          <Link
            className={featuresArrow ? "navbar__link--hover" : "navbar__link"}
            onClick={() => setfeaturesArrow(!featuresArrow)}
          >
            Features
            {!featuresArrow ? (
              <IoIosArrowDown className="navbar__icon" />
            ) : (
              <IoIosArrowUp className="navbar__icon" />
            )}
          </Link>
          {featuresArrow && (
            <div
              className="dropdown__menu"
              onMouseLeave={() => setfeaturesArrow(false)}
            >
              <Link
                className="dropdown__menu--link"
                to="/features/invoice-and-quotation"
                onClick={() => setfeaturesArrow(false)}
              >
                Invoice And Quotations
              </Link>
            </div>
          )}
        </OnClickOutside>
      </div>
      <div className="dropdown__container">
        <OnClickOutside onClickOutside={() => setresourcesArrow(false)}>
          <Link
            className={resourcesArrow ? "navbar__link--hover" : "navbar__link"}
            onClick={() => setresourcesArrow(!resourcesArrow)}
          >
            Resources
            {!resourcesArrow ? (
              <IoIosArrowDown className="navbar__icon" />
            ) : (
              <IoIosArrowUp className="navbar__icon" />
            )}
          </Link>
          {resourcesArrow && (
            <div
              className="dropdown__menu"
              onMouseLeave={() => setresourcesArrow(false)}
            >
              <Link
                className="dropdown__menu--link"
                to="https://blog.groflex.in"
              >
                Blogs
              </Link>
            </div>
          )}
        </OnClickOutside>
      </div>
    </div>
  );
}
