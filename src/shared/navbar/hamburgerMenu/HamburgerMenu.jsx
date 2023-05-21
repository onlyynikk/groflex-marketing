import React, { useState, useEffect } from "react";
import "./hamburgermenu.css";
import { Link } from "react-router-dom";

import BtnPrimary from "../../btnGreen/BtnPrimary";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import OnClickOutside from "../../onClickOutside/OnClickOutside";
OnClickOutside;
import BtnLight from "../../btnLight/BtnLight";
import acc from "../../../assets/icons/acc.svg";
import accgreen from "../../../assets/icons/acc-green.svg";
import arrow from "../../../assets/icons/arrow.svg";
import pc from "../../../assets/icons/pc.svg";
// import pcgreen from '../../../assets/icons/pc-green.svg'
// import arrowgreen from "../../../assets/icons/arrow-green.svg";
import bookmark from "../../../assets/icons/bookmark.svg";
// import bookmarkgreen from "../../../assets/icons/bookmark-green.svg";
import branch from "../../../assets/icons/branch.svg";
// import branchgreen from "../../../assets/icons/branch-green.svg";
import calender from "../../../assets/icons/calender.svg";
// import calendegreen from "../../../assets/icons/calender-green.svg";
import location from "../../../assets/icons/location.svg";
// import locationgreen from "../../../assets/icons/location-green.svg";
import medal from "../../../assets/icons/medal.svg";
// import medalgreen from "../../../assets/icons/medal-green.svg";
import msge from "../../../assets/icons/msge.svg";
// import msgegreen from "../../../assets/icons/msge-green.svg";
import percent from "../../../assets/icons/percent.svg";
// import percentgreen from "../../../assets/icons/percent-green.svg";

export default function HamburgerMenu({ setToggle }) {
  const [featuresArrow, setfeaturesArrow] = useState(false);
  const [resourcesArrow, setresourcesArrow] = useState(false);
  const [accountingArrow, setAccountingArrow] = useState(false);
  const [solutionsArrow, setSolutionsArrow] = useState(false);
  const [companyArrow, setCompanyArrow] = useState(false);

  function handleFeaturesClick() {
    setfeaturesArrow(!featuresArrow);
    setresourcesArrow(false);
    setAccountingArrow(false);
    setSolutionsArrow(false);
    setCompanyArrow(false);
  }

  function handleResourcesClick() {
    setresourcesArrow(!resourcesArrow);
    setfeaturesArrow(false);
    setAccountingArrow(false);
    setSolutionsArrow(false);
    setCompanyArrow(false);
  }
  function handleSolutionClick() {
    setresourcesArrow(false);
    setfeaturesArrow(false);
    setAccountingArrow(false);
    setSolutionsArrow(!solutionsArrow);
    setCompanyArrow(false);
  }
  function handleCompanyClick() {
    setresourcesArrow(false);
    setfeaturesArrow(false);
    setAccountingArrow(false);
    setSolutionsArrow(false);
    setCompanyArrow(!companyArrow);
  }

  // function handleScroll() {
  //   setToggle(false);
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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
          <div className="hamburger__features--sublinks">
            <div className={accountingArrow ? "box1" : "dropdown__menu--items"}>
              <div
                className="dropdown__menu--item--section1"
                onClick={() => setAccountingArrow(!accountingArrow)}
              >
                <Link className={accountingArrow ? "accounting--active " : ""}>
                  {accountingArrow ? (
                    <img src={accgreen} alt="icon" className="icon-green" />
                  ) : (
                    <img src={acc} alt="icon" className="icon-black" />
                  )}
                  Accounting
                </Link>
                {accountingArrow ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {accountingArrow ? (
                <div className="accounting__sublinks">
                  <Link
                    to="/features/invoice-and-quotation"
                    onClick={() => setToggle(false)}
                  >
                    Quotations and Invoices
                  </Link>
                  <Link
                    to="/features/cash&bank-and-reconcilliation"
                    onClick={() => setToggle(false)}
                  >
                    Cash and Bank
                  </Link>
                  <Link
                    to="/features/general-accounting"
                    onClick={() => setToggle(false)}
                  >
                    General Accounting
                  </Link>
                  <Link
                    to="/features/reports-page"
                    onClick={() => setToggle(false)}
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
                  to="/features/upcoming-features"
                  onClick={() => setToggle(false)}
                >
                  <img src={bookmark} alt="icon" className="icon-black" />
                  {/* <img src={bookmarkgreen} alt="icon" className="icon-green" /> */}
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
                  to="/features/upcoming-features"
                  onClick={() => setToggle(false)}
                >
                  <img src={percent} alt="icon" className="icon-black" />
                  {/* <img src={percentgreen} alt="icon" className="icon-green" /> */}
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
                  to="/features/upcoming-features"
                  onClick={() => setToggle(false)}
                >
                  <img
                    to="/features/upcoming-features"
                    src={calender}
                    alt="icon"
                    className="icon-black"
                  />
                  {/* <img src={calendegreen} alt="icon" className="icon-green" /> */}
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
                  to="/features/upcoming-features"
                  onClick={() => setToggle(false)}
                >
                  <img
                    to="/features/upcoming-features"
                    src={medal}
                    alt="icon"
                    className="icon-black"
                  />
                  {/* <img src={medalgreen} alt="icon" className="icon-green" /> */}
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
                  to="/features/upcoming-features"
                  onClick={() => setToggle(false)}
                >
                  <img src={branch} alt="icon" className="icon-black" />
                  {/* <img src={branchgreen} alt="icon" className="icon-green" /> */}
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
        <Link
          className={
            solutionsArrow
              ? "hamburger__menu--link-active"
              : "hamburger__menu--link"
          }
          onClick={handleSolutionClick}
        >
          Solutions
          {solutionsArrow ? (
            <IoIosArrowUp className="arrow-mobile" />
          ) : (
            <IoIosArrowDown className="arrow-mobile" />
          )}
        </Link>
        {solutionsArrow && (
          <div className="solutions__section--links--wrapper">
            <div className="dropdown__menu--solutions-section">
              <h2>Industry</h2>
              <div className="solutions__pages-links">
                <Link
                  to="/solutions/manufacture"
                  onClick={() => setToggle(false)}
                >
                  Manufacturing
                </Link>
                <Link to="/solutions/retail" onClick={() => setToggle(false)}>
                  Retail
                </Link>
                <Link
                  to="/solutions/E-commerce"
                  onClick={() => setToggle(false)}
                >
                  E-Commerce
                </Link>
                <Link
                  to="/solutions/food&beverage"
                  onClick={() => setToggle(false)}
                >
                  Food and Beverage
                </Link>
                <Link
                  to="/solutions/health&wellness"
                  onClick={() => setToggle(false)}
                >
                  Health & Wellness
                </Link>
                <Link
                  to="/solutions/hospitality"
                  onClick={() => setToggle(false)}
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
                  onClick={() => setToggle(false)}
                >
                  Small Business Owners
                </Link>
                <Link to="/solutions/CFO " onClick={() => setToggle(false)}>
                  Chief Financial Officers
                </Link>
                <Link
                  to="/solutions/accountants"
                  onClick={() => setToggle(false)}
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
                  onClick={() => setToggle(false)}
                >
                  Small and medium sized businesses
                </Link>
              </div>
            </div>
          </div>
        )}
        {/* <Link
          to="/pricing"
          className="hamburger__menu--link"
          onClick={() => setToggle(false)}
        >
          Pricing
        </Link> */}
        <Link
          className={
            companyArrow
              ? "hamburger__menu--link-active"
              : "hamburger__menu--link"
          }
          onClick={handleCompanyClick}
        >
          Company
          {companyArrow ? (
            <IoIosArrowUp className="arrow-mobile" />
          ) : (
            <IoIosArrowDown className="arrow-mobile" />
          )}
        </Link>
        {companyArrow && (
          <div className="hamburger__company--sublinks-wrapper">
            <Link to="/about-us" onClick={() => setToggle(false)}>
              <img src={location} alt="icon" className="icon-black" />
              {/* <img src={locationgreen} alt="icon" className="icon-green" /> */}
              About Us
            </Link>
            <Link to="/contact-us" onClick={() => setToggle(false)}>
              <img src={msge} alt="icon" className="icon-black" />
              {/* <img src={msgegreen} alt="icon" className="icon-green" /> */}
              Contact Us
            </Link>
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
          <div className="hamburger__company--sublinks-wrapper">
            <Link
              to="https://tutorials.groflex.in/"
              onClick={() => setToggle(false)}
            >
              <img src={pc} alt="icon" className="icon-black" />
              {/* <img src={locationgreen} alt="icon" className="icon-green" /> */}
              Tutorials
            </Link>
            <Link
              to="https://blog.groflex.in/"
              onClick={() => setToggle(false)}
            >
              <img src={location} alt="icon" className="icon-black" />
              {/* <img src={locationgreen} alt="icon" className="icon-green" /> */}
              BLogs
            </Link>
            <Link
              to="https://groflex.in/features/all-features"
              onClick={() => setToggle(false)}
            >
              <img src={arrow} alt="icon" className="icon-black" />
              {/* <img src={arrowgreen} alt="icon" className="icon-green" /> */}
              All Features
            </Link>
          </div>
        )}
      </div>
      <hr style={{ border: "1px solid #00a353" }} />
      <div className="hamburger__menu--buttons">
        <div className="hamburger__menu--btn">
          <BtnLight text={"Sign In"} />
        </div>
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

//  <div className="hamburger__menu--links">
//    <Link
//      className="hamburger__menu--link"
//      onClick={() => setToggle(false)}
//      to="/"
//    >
//      Home
//    </Link>
//    {/* <Link
//       className={
//         featuresArrow
//           ? "hamburger__menu--link-active"
//           : "hamburger__menu--link"
//       }
//       onClick={handleFeaturesClick}
//     >
//       Features
//       {featuresArrow ? (
//         <IoIosArrowUp className="arrow-mobile" />
//       ) : (
//         <IoIosArrowDown className="arrow-mobile" />
//       )}
//     </Link>
//     {featuresArrow && (
//       <div className="dropdown__link">
//         <Link
//           className={
//             accountingArrow
//               ? "  hamburger__menu--link-level2-active"
//               : "hamburger__menu--link-level2"
//           }
//           onClick={handleLevel2Click}
//         >
//           Accounting
//           {accountingArrow ? (
//             <IoIosArrowUp className="arrow-mobile" />
//           ) : (
//             <IoIosArrowDown className="arrow-mobile" />
//           )}
//         </Link>
//         {accountingArrow ? (
//           <div className="hamburger__menu--links--level3">
//             <Link to="/features/invoice-and-quotation">
//               Quotations and Invoices
//             </Link>

//             <Link to="/features/cash&bank-and-reconcilliation">
//               Cash and Bank
//             </Link>

//             <Link to="/features/general-accounting">
//               General Accounting
//             </Link>

//             <Link to="/features/reports-page">Financial Reports</Link>
//           </div>
//         ) : (
//           <div>
//             <p>
//               Streamline your accounting, save time, and make informed
//               decisions to boost your business growth.
//             </p>
//           </div>
//         )}
//         <Link className="hamburger__menu--link-level2-static">
//           Inventory management
//         </Link>
//         <Link className="hamburger__menu--link-level2-static">
//           CRM Systems
//         </Link>
//         <Link className="hamburger__menu--link-level2-static">
//           Human Resources
//         </Link>
//       </div>
//     )} */}
//    <Link
//      className={
//        featuresArrow
//          ? "hamburger__menu--link-active"
//          : "hamburger__menu--link"
//      }
//      onClick={handleFeaturesClick}
//    >
//      Features
//      {featuresArrow ? (
//        <IoIosArrowUp className="arrow-mobile" />
//      ) : (
//        <IoIosArrowDown className="arrow-mobile" />
//      )}
//    </Link>
//    {featuresArrow && (
//      <div className="hamburger__features--sublinks-wrapper">
//        <div className="hamburger__features--sublink">
//          <Link onClick={handleLevel2Click}>
//            <img src={navacc} alt="icon" />
//            Accounting
//          </Link>
//          {accountingArrow ? (
//            <IoIosArrowUp className="arrow-mobile" />
//          ) : (
//            <IoIosArrowDown className="arrow-mobile" />
//          )}
//          <p>
//            Streamline your accounting, save time, and make informed
//            decisions to boost your business growth.
//          </p>
//        </div>
//        <div className="hamburger__features--sublink">
//          <Link>
//            <img src={bookmark} alt="icon" />
//            CRM Systems
//          </Link>
//          <p>Comming soon...</p>
//        </div>
//        <div className="hamburger__features--sublink">
//          <Link>
//            <img src={percent} alt="icon" />
//            E-commerce
//          </Link>
//          <p>Comming soon...</p>
//        </div>
//        <div className="hamburger__features--sublink">
//          <Link>
//            <img src={calender} alt="icon" />
//            Inventory management
//          </Link>
//          <p>Up next...</p>
//        </div>
//        <div className="hamburger__features--sublink">
//          <Link>
//            <img src={medal} alt="icon" />
//            Human Resources
//          </Link>
//          <p>Comming soon...</p>
//        </div>
//        <div className="hamburger__features--sublink">
//          <Link>
//            <img src={branch} alt="icon" />
//            Supply Chain
//          </Link>
//          <p>Comming soon...</p>
//        </div>
//      </div>
//    )}
//    <Link
//      className={
//        solutionsArrow
//          ? "hamburger__menu--link-active"
//          : "hamburger__menu--link"
//      }
//      onClick={handleSolutionClick}
//    >
//      Solutions
//      {solutionsArrow ? (
//        <IoIosArrowUp className="arrow-mobile" />
//      ) : (
//        <IoIosArrowDown className="arrow-mobile" />
//      )}
//    </Link>
//    {solutionsArrow && (
//      <div className="solutions__hamburger--wrapper">
//        <div className="solutions__hamburger--section boxy-1">
//          <h3>Industry</h3>
//          <Link
//            to="/solutions/manufacture"
//            onClick={() => setSolutionsArrow(false)}
//          >
//            Manufacturing
//          </Link>
//          <Link
//            to="/solutions/retail"
//            onClick={() => setSolutionsArrow(false)}
//          >
//            Retail
//          </Link>
//          <Link
//            to="/solutions/E-commerce"
//            onClick={() => setSolutionsArrow(false)}
//          >
//            E-commerce
//          </Link>
//          <Link
//            to="/solutions/food&beverage"
//            onClick={() => setSolutionsArrow(false)}
//          >
//            Food and Beverage
//          </Link>

//          <Link
//            to="/solutions/health&wellness"
//            onClick={() => setSolutionsArrow(false)}
//          >
//            Health & wellness
//          </Link>
//          <Link
//            to="/solutions/hospitality"
//            onClick={() => setSolutionsArrow(false)}
//          >
//            Hospitality
//          </Link>
//        </div>
//        <div className="solutions__hamburger--section">
//          <h3>Role</h3>
//          <Link
//            to="/solutions/small-business-owners"
//            onClick={() => setSolutionsArrow(false)}
//          >
//            Small Business Owners
//          </Link>
//          <Link to="/solutions/CFO" onClick={() => setSolutionsArrow(false)}>
//            CFO
//          </Link>
//          <Link
//            to="/solutions/accountants"
//            onClick={() => setSolutionsArrow(false)}
//          >
//            Accountants
//          </Link>
//        </div>
//        <div className="solutions__hamburger--section">
//          <h3>Company Size</h3>
//          <Link
//            to="/solutions/small-and-medium-business"
//            onClick={() => setSolutionsArrow(false)}
//          >
//            Small and Medium size business
//          </Link>
//        </div>
//      </div>
//    )}
//    <Link
//      className={
//        companyArrow
//          ? "hamburger__menu--link-active"
//          : "hamburger__menu--link"
//      }
//      onClick={handleCompanyClick}
//    >
//      Company
//      {companyArrow ? (
//        <IoIosArrowUp className="arrow-mobile" />
//      ) : (
//        <IoIosArrowDown className="arrow-mobile" />
//      )}
//    </Link>
//    {companyArrow && (
//      <div className="hamburger__menu--links--level3">
//        <Link to="/about-us" onClick={() => setCompanyArrow(false)}>
//          About Us
//        </Link>

//        <Link to="/contact-us" onClick={() => setCompanyArrow(false)}>
//          Contact Us
//        </Link>
//      </div>
//    )}
//    <Link
//      className={
//        resourcesArrow
//          ? "hamburger__menu--link-active"
//          : "hamburger__menu--link"
//      }
//      onClick={handleResourcesClick}
//    >
//      Resources
//      {resourcesArrow ? (
//        <IoIosArrowUp className="arrow-mobile" />
//      ) : (
//        <IoIosArrowDown className="arrow-mobile" />
//      )}
//    </Link>
//    {resourcesArrow && (
//      <div className="dropdown__link-2">
//        <Link
//          to="/features/all-features"
//          className="hamburger__menu--links--level3"
//          onClick={() => setToggle(false)}
//        >
//          All Features
//        </Link>
//        <Link
//          to="https://blog.groflex.in"
//          className="hamburger__menu--links--level3"
//          onClick={() => setToggle(false)}
//        >
//          Blogs
//        </Link>
//      </div>
//    )}
//  </div>;
