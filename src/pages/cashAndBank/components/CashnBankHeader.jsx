import React from "react";
import "./cashnbankheader.css";
import { AiOutlineCheck } from "react-icons/ai";
import BtnPrimary from "../../../shared/btnGreen/BtnPrimary";
import quotation from "../../../assets/cash&bank/cashnbank-quotation.png";

export default function CashnBankHeader() {
  return (
    <div className="cashnbank__header--section">
      <div className="cashnbank__header--section-1">
        <div className="cashnbank__header">
          <h1>Manage your accounts on the go</h1>
          <p>
            Get efficient cash and bank account management, easily add, edit,
            and access information. You can reconcile transactions accurately by
            comparing and matching bank statements with transaction records. Get
            options to review and correct amounts and edit transaction details.
          </p>
          <BtnPrimary text={"Sign up for free"} />
        </div>
        <div className="cashnbank__header-img">
          <img src={quotation} alt="header img" />
        </div>
      </div>
      <div className="cashnbank__header--section-2">
        <h1>Revolutionizing your financial management tools</h1>
        <div className="cashnbank__header--section-2-cl">
          <p>
            <AiOutlineCheck
              className="invoice__header--checkmark--icon"
              color="green"
              size={40}
            />
            Streamlined financial management for businesses.
          </p>
          <p>
            <AiOutlineCheck
              className="invoice__header--checkmark--icon"
              color="green"
              size={40}
            />
            Error-free transactions with reconciliation feature.
          </p>
          <p>
            <AiOutlineCheck
              className="invoice__header--checkmark--icon"
              color="green"
              size={40}
            />
            Efficient time management for businesses.
          </p>
          <p>
            <AiOutlineCheck
              className="invoice__header--checkmark--icon"
              color="green"
              size={40}
            />
            Easy-to-use financial management tools for SMEs.
          </p>
        </div>
      </div>
    </div>
  );
}
