import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import OnClickOutside from "../onClickOutside/OnClickOutside";

import "./navlinks.css";
import acc from "../../assets/icons/acc.svg";
import accgreen from "../../assets/icons/acc-green.svg";
import arrow from "../../assets/icons/arrow.svg";
import arrowgreen from "../../assets/icons/arrow-green.svg";
import bookmark from "../../assets/icons/bookmark.svg";
import bookmarkgreen from "../../assets/icons/bookmark-green.svg";
import branch from "../../assets/icons/branch.svg";
import branchgreen from "../../assets/icons/branch-green.svg";
import calender from "../../assets/icons/calender.svg";
import calendergreen from "../../assets/icons/calender-green.svg";
import location from "../../assets/icons/location.svg";
import locationgreen from "../../assets/icons/location-green.svg";
import medal from "../../assets/icons/medal.svg";
import medalgreen from "../../assets/icons/medal-green.svg";
import msge from "../../assets/icons/msge.svg";
import msgegreen from "../../assets/icons/msge-green.svg";
import percent from "../../assets/icons/percent.svg";
import percentgreen from "../../assets/icons/percent-green.svg";
import blog from "../../assets/icons/blog.svg";
import bloggreen from "../../assets/icons/blog-green.svg";

export default function Navlinks() {
  const [featuresArrow, setfeaturesArrow] = useState(false);
  const [resourcesArrow, setresourcesArrow] = useState(false);
  const [accountingArrow, setAccountingArrow] = useState(false);
  const [solutionArrow, setSolutionArrow] = useState(false);
  const [companyArrow, setCompanyArrow] = useState(false);
  const [icon, setIcon] = useState(false);
  const [icon1, setIcon1] = useState(false);
  const [icon2, setIcon2] = useState(false);
  const [icon3, setIcon3] = useState(false);
  const [icon4, setIcon4] = useState(false);
  const [icon5, setIcon5] = useState(false);
  const [icon6, setIcon6] = useState(false);
  const [icon7, setIcon7] = useState(false);
  const [icon8, setIcon8] = useState(false);
  const [icon9, setIcon9] = useState(false);

  function handleLevel3LinksClick() {
    setAccountingArrow(!accountingArrow);
    setfeaturesArrow(false);
  }
  function handleClickOutsidefeature() {
    setAccountingArrow(false);
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
        <OnClickOutside onClickOutside={handleClickOutsidefeature}>
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
              className="dropdown__menu-long dropdown__wrapper "
              onMouseLeave={() => setfeaturesArrow(false)}
            >
              <div
                className={accountingArrow ? "box1" : "dropdown__menu--items"}
              >
                <div
                  className="dropdown__menu--item--section1"
                  onClick={() => setAccountingArrow(!accountingArrow)}
                >
                  <Link
                    className={accountingArrow ? "accounting--active " : ""}
                    onMouseOver={() => setIcon(true)}
                    onMouseLeave={() => setIcon(false)}
                  >
                    {icon + accountingArrow ? (
                      <img src={accgreen} alt="icon" />
                    ) : (
                      <img src={acc} alt="icon" />
                    )}
                    Accounting
                  </Link>
                  {accountingArrow ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                {accountingArrow ? (
                  <div className="accounting__sublinks">
                    <Link
                      to="/features/invoice-and-quotation"
                      onClick={() => setfeaturesArrow(false)}
                    >
                      Quotations and Invoices
                    </Link>
                    <Link
                      to="/features/cash&bank-and-reconcilliation"
                      onClick={() => setfeaturesArrow(false)}
                    >
                      Cash and Bank
                    </Link>
                    <Link
                      to="/features/general-accounting"
                      onClick={() => setfeaturesArrow(false)}
                    >
                      General Accounting
                    </Link>
                    <Link
                      to="/features/reports-page"
                      onClick={() => setfeaturesArrow(false)}
                    >
                      Financial Reports
                    </Link>
                  </div>
                ) : (
                  <div className="dropdown__menu--item--section2">
                    <p className="dropdown__menu--item--section2-para">
                      Streamline your accounting, save time, and make informed
                      decisions to boost your business growth.
                    </p>
                  </div>
                )}
              </div>
              <div className="dropdown__menu--items box2">
                <div className="dropdown__menu--item--section1">
                  <Link
                    onClick={() => setAccountingArrow(false)}
                    onMouseOver={() => setIcon1(true)}
                    onMouseLeave={() => setIcon1(false)}
                  >
                    {icon1 ? (
                      <img
                        src={bookmarkgreen}
                        alt="icon"
                        className="icon-green"
                      />
                    ) : (
                      <img src={bookmark} alt="icon" className="icon-black" />
                    )}
                    CRM Systems
                  </Link>
                </div>
                <div className="dropdown__menu--item--section2">
                  <p
                    className={
                      accountingArrow
                        ? "comming-soon--none"
                        : "comming-soon--active"
                    }
                  >
                    coming soon...
                  </p>
                </div>
              </div>
              <div className="dropdown__menu--items box3">
                <div className="dropdown__menu--item--section1">
                  <Link
                    onClick={() => setAccountingArrow(false)}
                    onMouseOver={() => setIcon2(true)}
                    onMouseLeave={() => setIcon2(false)}
                  >
                    {icon2 ? (
                      <img
                        src={percentgreen}
                        alt="icon"
                        className="icon-green"
                      />
                    ) : (
                      <img src={percent} alt="icon" className="icon-black" />
                    )}
                    E-Commerce
                  </Link>
                </div>
                <div className="dropdown__menu--item--section2">
                  <p
                    className={
                      accountingArrow
                        ? "comming-soon--none"
                        : "comming-soon--active"
                    }
                  >
                    coming soon...
                  </p>
                </div>
              </div>
              <div className="dropdown__menu--items box4">
                <div className="dropdown__menu--item--section1">
                  <Link
                    onClick={() => setAccountingArrow(false)}
                    onMouseOver={() => setIcon3(true)}
                    onMouseLeave={() => setIcon3(false)}
                  >
                    {icon3 ? (
                      <img
                        src={calendergreen}
                        alt="icon"
                        className="icon-green"
                      />
                    ) : (
                      <img src={calender} alt="icon" className="icon-black" />
                    )}
                    Inventory management
                  </Link>
                </div>
                <div className="dropdown__menu--item--section2">
                  <p
                    className={
                      accountingArrow
                        ? "comming-soon--none"
                        : "comming-soon--active"
                    }
                  >
                    Up next!
                  </p>
                </div>
              </div>
              <div className="dropdown__menu--items box5">
                <div className="dropdown__menu--item--section1">
                  <Link
                    onClick={() => setAccountingArrow(false)}
                    onMouseOver={() => setIcon4(true)}
                    onMouseLeave={() => setIcon4(false)}
                  >
                    {icon4 ? (
                      <img
                        src={bookmarkgreen}
                        alt="icon"
                        className="icon-green"
                      />
                    ) : (
                      <img src={bookmark} alt="icon" className="icon-black" />
                    )}
                    Human Resources
                  </Link>
                </div>
                <div className="dropdown__menu--item--section2">
                  <p
                    className={
                      accountingArrow
                        ? "comming-soon--none"
                        : "comming-soon--active"
                    }
                  >
                    coming soon...
                  </p>
                </div>
              </div>
              <div className="dropdown__menu--items box6">
                <div className="dropdown__menu--item--section1">
                  <Link
                    onClick={() => setAccountingArrow(false)}
                    onMouseOver={() => setIcon5(true)}
                    onMouseLeave={() => setIcon5(false)}
                  >
                    {icon5 ? (
                      <img
                        src={branchgreen}
                        alt="icon"
                        className="icon-green"
                      />
                    ) : (
                      <img src={branch} alt="icon" className="icon-black" />
                    )}
                    Supply Chain
                  </Link>
                </div>
                <div className="dropdown__menu--item--section2">
                  <p
                    className={
                      accountingArrow
                        ? "comming-soon--none"
                        : "comming-soon--active"
                    }
                  >
                    coming soon...
                  </p>
                </div>
              </div>
            </div>
          )}
        </OnClickOutside>
      </div>
      <div className="dropdown__container">
        <OnClickOutside onClickOutside={() => setSolutionArrow(false)}>
          <Link
            className={solutionArrow ? "navbar__link--hover" : "navbar__link"}
            onClick={() => setSolutionArrow(!solutionArrow)}
          >
            Solutions
            {!solutionArrow ? (
              <IoIosArrowDown className="navbar__icon" />
            ) : (
              <IoIosArrowUp className="navbar__icon" />
            )}
          </Link>
          {solutionArrow && (
            <div className="dropdown__menu--solutions">
              <div className="dropdown__menu--solutions-section">
                <h2>Industry</h2>
                <div className="solutions__pages-links">
                  <Link
                    to="/solutions/manufacture"
                    onClick={() => setSolutionArrow(false)}
                  >
                    Manufacturing
                  </Link>
                  <Link
                    to="/solutions/retail"
                    onClick={() => setSolutionArrow(false)}
                  >
                    Retail
                  </Link>
                  <Link
                    to="/solutions/E-commerce"
                    onClick={() => setSolutionArrow(false)}
                  >
                    E-Commerce
                  </Link>
                  <Link
                    to="/solutions/food&beverage"
                    onClick={() => setSolutionArrow(false)}
                  >
                    Food and Beverage
                  </Link>
                  <Link
                    to="/solutions/health&wellness"
                    onClick={() => setSolutionArrow(false)}
                  >
                    Health & Wellness
                  </Link>
                  <Link
                    to="/solutions/hospitality"
                    onClick={() => setSolutionArrow(false)}
                  >
                    Hospitality
                  </Link>
                </div>
              </div>
              <div className="dropdown__menu--solutions-section">
                <h2>Role</h2>
                <div className="solutions__pages-links">
                  <Link
                    to="/solutions/small-business-owners"
                    onClick={() => setSolutionArrow(false)}
                  >
                    Small Business Owners
                  </Link>
                  <Link
                    to="/solutions/CFO "
                    onClick={() => setSolutionArrow(false)}
                  >
                    Chief Financial Officers
                  </Link>
                  <Link
                    to="/solutions/accountants"
                    onClick={() => setSolutionArrow(false)}
                  >
                    Accountants
                  </Link>
                </div>
              </div>
              <div className="dropdown__menu--solutions-section">
                <h2>Company Size</h2>
                <div className="solutions__pages-links">
                  <Link
                    to="/solutions/small-and-medium-business"
                    onClick={() => setSolutionArrow(false)}
                  >
                    Small and medium sized businesses
                  </Link>
                </div>
              </div>
            </div>
          )}
        </OnClickOutside>
      </div>
      <div className="dropdown__container">
        <OnClickOutside onClickOutside={() => setCompanyArrow(false)}>
          <Link
            className={companyArrow ? "navbar__link--hover" : "navbar__link"}
            onClick={() => setCompanyArrow(!companyArrow)}
          >
            Company
            {!companyArrow ? (
              <IoIosArrowDown className="navbar__icon" />
            ) : (
              <IoIosArrowUp className="navbar__icon" />
            )}
          </Link>
          {companyArrow && (
            <div className="dropdown__menu-company">
              <Link
                to="/about-us"
                onClick={() => setCompanyArrow(false)}
                onMouseOver={() => setIcon6(true)}
                onMouseLeave={() => setIcon6(false)}
              >
                {icon6 ? (
                  <img src={locationgreen} alt="icon" className="icon-green" />
                ) : (
                  <img src={location} alt="icon" className="icon-black" />
                )}
                About Us
              </Link>
              <Link
                to="/contact-us"
                onClick={() => setCompanyArrow(false)}
                onMouseOver={() => setIcon7(true)}
                onMouseLeave={() => setIcon7(false)}
              >
                {icon7 ? (
                  <img src={msgegreen} alt="icon" className="icon-green" />
                ) : (
                  <img src={msge} alt="icon" className="icon-black" />
                )}
                Contact Us
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
            <div className="dropdown__menu--resources">
              <Link
                to="https://blog.groflex.in/"
                onMouseOver={() => setIcon8(true)}
                onMouseLeave={() => setIcon8(false)}
              >
                {icon8 ? (
                  <img src={bloggreen} alt="icon" className="icon-green" />
                ) : (
                  <img src={blog} alt="icon" className="icon-black" />
                )}
                Blogs
              </Link>
              <Link
                to="/features/all-features"
                onClick={() => setresourcesArrow(false)}
                onMouseOver={() => setIcon9(true)}
                onMouseLeave={() => setIcon9(false)}
              >
                {icon9 ? (
                  <img src={arrowgreen} alt="icon" className="icon-green" />
                ) : (
                  <img src={arrow} alt="icon" className="icon-black" />
                )}
                All Features
              </Link>
            </div>
          )}
        </OnClickOutside>
      </div>
    </div>
  );
}

{
  /* <div className="navbar__links--wrapper">
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
    <OnClickOutside onClickOutside={() => setSolutionArrow(false)}>
      <Link
        className={solutionArrow ? "navbar__link--hover" : "navbar__link"}
        onClick={() => setSolutionArrow(!solutionArrow)}
      >
        Solutions
        {!solutionArrow ? (
          <IoIosArrowDown className="navbar__icon" />
        ) : (
          <IoIosArrowUp className="navbar__icon" />
        )}
      </Link>
    </OnClickOutside>
  </div>
  <div className="dropdown__container">
    <OnClickOutside onClickOutside={() => setCompanyArrow(false)}>
      <Link
        className={companyArrow ? "navbar__link--hover" : "navbar__link"}
        onClick={() => setCompanyArrow(!companyArrow)}
      >
        Company
        {!companyArrow ? (
          <IoIosArrowDown className="navbar__icon" />
        ) : (
          <IoIosArrowUp className="navbar__icon" />
        )}
      </Link>
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
          <Link className="navbar__link--level3" to="/features/all-features">
            All Features
          </Link>
          <Link className="navbar__link--level3" to="https://blog.groflex.in">
            Blogs
          </Link>
        </div>
      )}
    </OnClickOutside>
  </div>
</div>; */
}
