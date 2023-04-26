import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import OnClickOutside from "../onClickOutside/OnClickOutside";
import "./navlinks.css";

export default function Navlinks() {
  const [featuresArrow, setfeaturesArrow] = useState(false);
  const [resourcesArrow, setresourcesArrow] = useState(false);
  const [accountingArrow, setAccountingArrow] = useState(false);

  function handleLevel3LinksClick() {
    setAccountingArrow(!accountingArrow);
    setfeaturesArrow(false);
  }

  return (
    <div className="navbar__links--wrapper">
      <Link
        className="navbar__link space-right"
        to="/"
        onClick={() => window.scrollTo(0, 0)}
      >
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
              <div
                className="navbar__link--level2--container"
                onMouseLeave={() => setAccountingArrow(false)}
              >
                <Link
                  className={
                    accountingArrow
                      ? "navbar__link--level2-active"
                      : "navbar__link--level2"
                  }
                  // className="navbar__link--level2"
                  onClick={() => setAccountingArrow(!accountingArrow)}
                >
                  Accounting
                  {accountingArrow ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </Link>

                {accountingArrow ? (
                  <div className="level3__links--container">
                    <Link
                      to="/features/invoice-and-quotation"
                      className="navbar__link--level3"
                      onClick={handleLevel3LinksClick}
                    >
                      Quotations and Invoices
                    </Link>
                    <Link
                      className="navbar__link--level3"
                      to="/features/cash&bank-and-reconcilliation"
                      onClick={handleLevel3LinksClick}
                    >
                      Cash and Bank
                    </Link>
                    <Link
                      className="navbar__link--level3"
                      to="/features/general-accounting"
                      onClick={handleLevel3LinksClick}
                    >
                      General Accounting
                    </Link>
                    <Link
                      className="navbar__link--level3"
                      to="/features/reports-page"
                      onClick={handleLevel3LinksClick}
                    >
                      Financial Reports
                    </Link>
                  </div>
                ) : (
                  <p className="navbar__acc--info">
                    Streamline your accounting, save time, and make informed
                    decisions to boost your business growth.
                  </p>
                )}
              </div>
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
              className="dropdown__menu2"
              onMouseLeave={() => setresourcesArrow(false)}
            >
              <Link
                className="navbar__link--level3"
                to="/features/all-features"
              >
                All Features
              </Link>
              <Link
                className="navbar__link--level3"
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
