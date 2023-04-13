import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import OnClickOutside from "../onClickOutside/OnClickOutside";
import "./navlinks.css";

export default function Navlinks() {
  const [featuresArrow, setfeaturesArrow] = useState(false);
  const [resourcesArrow, setresourcesArrow] = useState(false);
  const [accountingArrow, setAccountingArrow] = useState(false);
  console.log(accountingArrow);
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
              className="dropdown__menu-accounting"
              onMouseLeave={() => setfeaturesArrow(false)}
            >
              <div
                className="navbar__link--level2--container"
                onMouseLeave={() => setAccountingArrow(false)}
              >
                <Link
                  className="navbar__link--level2"
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
                    >
                      Quotations and Invoices
                    </Link>
                    <Link
                      className="navbar__link--level3"
                      to="/features/cash&bank-and-reconcilliation"
                    >
                      Cash and Bank
                    </Link>
                    <Link
                      className="navbar__link--level3"
                      to="/features/general-accounting"
                    >
                      General Accounting
                    </Link>
                    <Link
                      className="navbar__link--level3"
                      to="/features/reports-page"
                    >
                      Financial Reports
                    </Link>
                  </div>
                ) : (
                  <p>
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
              className="dropdown__menu-resources"
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
