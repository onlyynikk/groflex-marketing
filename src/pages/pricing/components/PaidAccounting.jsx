import React, { useState } from "react";
import "../components/pricingbody/pricingbody.css";
import BtnPrimary from "../../../shared/btnGreen/BtnPrimary";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlineCheck } from "react-icons/ai";
import OnClickOutside from "../../../shared/onClickOutside/OnClickOutside";
import Swtichtoggle from "./switchtoggle/Swtichtoggle";

export default function PaidAccounting() {
  const [showPlan, setshowPlan] = useState(false);
  const [plan, setPlan] = useState(false);
  //false ---> yearly , true----->monthly
  return (
    <div className="pricingbody__container">
      <OnClickOutside onClickOutside={() => setshowPlan(false)}>
        <div className="pricingbody__section">
          <Swtichtoggle setPlan={setPlan} />
          <div className="pricing__content--wrapper">
            <div className="pricingbody__section-title">
              <h2>Full Accounting Suite</h2>
              <div className="paid__pricing--wrapper">
                <p>
                  {plan ? "399₹/month" : "3999₹/year (save 789₹ each year)"}
                </p>
                <BtnPrimary text={"Start free trail"} />
                {/* <p>+2 months free</p> */}
              </div>
            </div>
            <div className="pricingbody__section--content">
              <p className="pricing__details">
                Upgrade your plan today and start enjoying the peace of mind
                with efficient financial management.
              </p>
              <p className="pricing__subtitle">
                14 days free trial, NO credit CARD IS NEEDED!
              </p>
            </div>
          </div>
          <div className="picingbody__detail--btn">
            <button onClick={() => setshowPlan(!showPlan)}>
              {showPlan ? "Hide plan details" : "Show plan details"}
              {!showPlan ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </button>
          </div>
          <div
            className={
              showPlan
                ? "pricingbody__plan--container-open"
                : "pricingbody__plan--container-close"
            }
          >
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Everything
              included for free
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} />
              Chart of accounts & Sub- accounts
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Account list
              access
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Multi-profile
              handling
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Credit and
              debit note
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Add multiple
              bank
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Bank rules &
              reconciliation
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Currency
              adjustments
            </p>

            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} />
              Payment gateways
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Expenses
              tracking
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} />
              Customer ledger
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Automate
              payment reminder
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Bulk updates
            </p>

            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Cash & Bank
              account
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Schedule
              reports
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Upload expense
              invoices
            </p>

            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Real time
              reports & dashboards
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Customize
              reports & dashboards
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Create reports
              with colleagues
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} />
              General Ledgers
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Balance Sheet
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Cash Flow
              Statement
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Profit and Loss
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Displaying
              expenses in statistics
            </p>
          </div>
        </div>
      </OnClickOutside>
    </div>
  );
}
