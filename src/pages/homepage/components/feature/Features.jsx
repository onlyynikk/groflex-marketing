import React from "react";
import "./features.css";
import { Link } from "react-router-dom";
import casio from "../../../../assets/casio.svg";
import paper from "../../../../assets/paper.svg";
import card from "../../../../assets/card.svg";
import bar from "../../../../assets/bar.svg";
import money from "../../../../assets/money.svg";
import book from "../../../../assets/book.svg";

export default function Features() {
  return (
    <div className="features__container">
      <h1 className="features__title">Key Features</h1>
      <div className="cards">
        <div className="card">
          <h2 className="features__heading">
            <img
              src={money}
              alt="bar graph"
              // style={{ width: "53px", height: "53px" }}
            />
            Finances
          </h2>
          <p className="features__text">
            Organize your finances, enable editing of sub-accounts, manage
            transactions, filter, sort and add new transactions with ease.
          </p>
          <Link to="/features/reports-page" className="features__seemore">
            See more
          </Link>
        </div>
        <div className="card">
          <h2 className="features__heading">
            <img
              src={bar}
              alt="bar graph"
              // style={{ width: "53px", height: "53px" }}
            />
            Charts
          </h2>
          <p className="features__text">
            Easily edit bank and cash account details, view cash flow chart, and
            customize time periods for financial analysis.
          </p>
          <Link to="/features/general-accounting" className="features__seemore">
            See more
          </Link>
        </div>
        <div className="card">
          <h2 className="features__heading">
            <img
              src={card}
              alt="credit card"
              // style={{ width: "53px", height: "53px" }}
            />
            Transactions
          </h2>
          <p className="features__text">
            Efficient transaction reconciliation by selecting matching
            transactions, editing, and adding missing ones.
          </p>
          <Link to="/features/all-features" className="features__seemore">
            See more
          </Link>
        </div>
        <div className="card">
          <h2 className="features__heading">
            <img
              src={book}
              alt="bar graph"
              // style={{ width: "53px", height: "53px" }}
            />
            Accounting
          </h2>
          <p className="features__text">
            An all-in-one accounting solution with ledger creation, bulk
            payments, document management and credit and debit notes.
          </p>
          <Link to="/features/general-accounting" className="features__seemore">
            See more
          </Link>
        </div>
        <div className="card">
          <h2 className="features__heading">
            <img
              src={casio}
              alt="calculator"
              // style={{ width: "53px", height: "53px" }}
            />
            Quotations
          </h2>
          <p className="features__text">
            See the inflow, outflow, sources and <br />
            use of cash over a specific period
            <br /> of time.
          </p>
          <Link
            to="/features/invoice-and-quotation"
            className="features__seemore"
          >
            See more
          </Link>
        </div>
        <div className="card">
          <h2 className="features__heading">
            <img
              src={paper}
              alt="paper"
              // style={{ width: "53px", height: "53px" }}
            />
            Invoices
          </h2>
          <p className="features__text">
            Get multi-currency features, which can help you transact with
            customers from different countries.
          </p>
          <Link
            to="/features/invoice-and-quotation"
            className="features__seemore"
          >
            See more
          </Link>
        </div>
      </div>
    </div>
  );
}
