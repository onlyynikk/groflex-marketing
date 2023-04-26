import React, { useState, useEffect } from "react";
import "./hamburgermenu.css";
import { Link } from "react-router-dom";
import BtnPrimary from "../../btnGreen/BtnPrimary";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import OnClickOutside from "../../onClickOutside/OnClickOutside";
OnClickOutside;

export default function HamburgerMenu({ setToggle }) {
  const [featuresArrow, setfeaturesArrow] = useState(false);
  const [resourcesArrow, setresourcesArrow] = useState(false);
  const [accountingArrow, setAccountingArrow] = useState(false);

  function handleFeaturesClick() {
    setfeaturesArrow(!featuresArrow);
    setresourcesArrow(false);
    setAccountingArrow(false);
  }

  function handleResourcesClick() {
    setresourcesArrow(!resourcesArrow);
    setfeaturesArrow(false);
    setAccountingArrow(false);
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

  function handleLevel2Click() {
    setAccountingArrow(!accountingArrow);
    setresourcesArrow(false);
  }

  return (
    <div className="hamburger__menu--container">
      <div className="hamburger__menu--links">
        <Link
          className="hamburger__menu--link"
          onClick={() => setToggle(false)}
          to="/"
        >
          Home
        </Link>
        <Link
          className={
            featuresArrow
              ? "hamburger__menu--link-active"
              : "hamburger__menu--link"
          }
          onClick={handleFeaturesClick}
        >
          Features
          {featuresArrow ? (
            <IoIosArrowUp className="arrow-mobile" />
          ) : (
            <IoIosArrowDown className="arrow-mobile" />
          )}
        </Link>
        {featuresArrow && (
          <div className="dropdown__link">
            <Link
              className={
                accountingArrow
                  ? "  hamburger__menu--link-level2-active"
                  : "hamburger__menu--link-level2"
              }
              onClick={handleLevel2Click}
            >
              Accounting
              {accountingArrow ? (
                <IoIosArrowUp className="arrow-mobile" />
              ) : (
                <IoIosArrowDown className="arrow-mobile" />
              )}
            </Link>
            {accountingArrow ? (
              <div className="hamburger__menu--links--level3">
                <Link to="/features/invoice-and-quotation">
                  Quotations and Invoices
                </Link>

                <Link to="/features/cash&bank-and-reconcilliation">
                  Cash and Bank
                </Link>

                <Link to="/features/general-accounting">
                  General Accounting
                </Link>

                <Link to="/features/reports-page">Financial Reports</Link>
              </div>
            ) : null}
          </div>
        )}
        <Link
          className={
            resourcesArrow
              ? "hamburger__menu--link-active"
              : "hamburger__menu--link"
          }
          onClick={handleResourcesClick}
        >
          Resources
          {resourcesArrow ? (
            <IoIosArrowUp className="arrow-mobile" />
          ) : (
            <IoIosArrowDown className="arrow-mobile" />
          )}
        </Link>
        {resourcesArrow && (
          <div className="dropdown__link-2">
            <Link
              to="/features/all-features"
              className="hamburger__menu--links--level3"
              onClick={() => setToggle(false)}
            >
              All Features
            </Link>
            <Link
              to="https://blog.groflex.in"
              className="hamburger__menu--links--level3"
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
          <BtnPrimary
            text={"Sign Up for free"}
            to={"https://app.groflex.in/"}
          />
        </div>
      </div>
    </div>
  );
}
