import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import BtnPrimary from "../../../../shared/btnGreen/BtnPrimary";
import quotationsimg from "../../../../assets/i&q.png";
import "../../components/invoiceheader/invoiceheader.css";

export default function InvoiceHeader() {
  return (
    <div className="invoice__header--container">
      <div className="invoice__header--title">
        <h1>For everything from quotations to payment and in between</h1>
      </div>
      <div className="invoice__header__section1">
        <div className="invoice__header__section1-para">
          <p>
            From sending quotations to converting them into invoices, from
            setting up payment reminders to registering payments on the
            dashboard, grofleX ensures efficient, secure and reliable business
            transaction processing.
          </p>
          <BtnPrimary text={"Sign up for free"} />
        </div>
        <div className="invoice__header--section-gif">
          <img src={quotationsimg} alt="quotations gif" />
        </div>
      </div>
      <div>{/* <FeaturesCta /> */}</div>
      <div className="invoice__header--section2">
        <div className="invoice__header--section2--title">
          <h1>Eliminate your manual work with automation</h1>
        </div>
        <div className="invoice__header--section2--items">
          <p>
            <AiOutlineCheck
              className="invoice__header--checkmark--icon"
              color="green"
              size={30}
            />
            Standardized professional quotations
          </p>
          <p>
            <AiOutlineCheck
              className="invoice__header--checkmark--icon"
              color="green"
              size={30}
            />
            Generate simplified GST compliant invoices
          </p>
          <p>
            <AiOutlineCheck
              className="invoice__header--checkmark--icon"
              color="green"
              size={30}
            />
            Improve efficiency with automated recurring invoices
          </p>
          <p>
            <AiOutlineCheck
              className="invoice__header--checkmark--icon"
              color="green"
              size={30}
            />
            Get paid on time with smart payment reminders
          </p>
        </div>
      </div>
    </div>
  );
}
