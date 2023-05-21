import React, { useState } from "react";
import "../components/pricingbody/pricingbody.css";
import BtnPrimary from "../../../shared/btnGreen/BtnPrimary";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlineCheck } from "react-icons/ai";
import OnClickOutside from "../../../shared/onClickOutside/OnClickOutside";

export default function FreePlan() {
  const [showFreePlan, setShowFreePlan] = useState(false);
  return (
    <div className="pricingbody__container">
      <OnClickOutside onClickOutside={() => setShowFreePlan(false)}>
        <div className="pricingbody__section">
          <div className="pricing__content--wrapper">
            <div className="pricingbody__section-title">
              <h2>Your Lifetime Invoicing & Quotations</h2>
              <BtnPrimary text={"Get Started"} />
            </div>

            <div className="pricingbody__section--content">
              <p className="pricing__details">
                Make your invoices and quotations as an unlimited solution.
                Sign-up to the easiest billing & invoicing software for FREE!
              </p>
              <p className="pricing__subtitle">
                NO credit CARD IS NEEDED TO SIGN UP, free forever.
              </p>
            </div>
          </div>

          <div className="picingbody__detail--btn">
            <button onClick={() => setShowFreePlan(!showFreePlan)}>
              {showFreePlan ? "Hide plans in details" : "Show plans in details"}
              {!showFreePlan ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </button>
          </div>

          <div
            className={
              showFreePlan
                ? "pricingbody__plan--container-open"
                : "pricingbody__plan--container-close"
            }
          >
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> 10 user limit
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} />
              Chat & Email Suport
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Manage invoices
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Recurring
              invoices
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Article list
              import/export
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Product list
              import/export
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Digital
              Payments
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> GST Complaint
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} />
              Recurring bills
            </p>

            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Invoice
              customization
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} />
              Quotations
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Timesheet
              invoicing
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Email invoices
              directly from the system
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Multi-currency
              handling
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Customer
              management
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Payment
              meminders
            </p>
            <p>
              <AiOutlineCheck style={{ marginRight: "1rem" }} /> Chartered
              accountant seat
            </p>
          </div>
        </div>
      </OnClickOutside>
    </div>
  );
}
