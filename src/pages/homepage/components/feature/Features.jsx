import React from "react";
import "./features.css";
import { Link } from "react-router-dom";
import casio from "../../../../assets/casio.svg";
import paper from "../../../../assets/paper.svg";
import card from "../../../../assets/card.svg";
import bar from "../../../../assets/bar.svg";
import team from "../../../../assets/team.svg";
import clock from "../../../../assets/clock.svg";

export default function Features() {
  return (
    <div className="features__container">
      <h1 className="features__title">Key Features</h1>
      <div className="cards">
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
            Send quotations to clients instantly. Gone are the days of stress
            over heavy paperwork.
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
            Generate GST-compliant invoices and convert estimates with ease
            using our custom invoice tool.
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
              src={card}
              alt="credit card"
              // style={{ width: "53px", height: "53px" }}
            />
            Payments
          </h2>
          <p className="features__text">
            Effortlessly handle online payments, track transactions, and send
            payment reminders automatically.
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
              src={bar}
              alt="bar graph"
              // style={{ width: "53px", height: "53px" }}
            />
            Database
          </h2>
          <p className="features__text">
            Efficiently manage customer and article data in one place for
            streamlined business operations.
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
              src={team}
              alt="team"
              // style={{ width: "53px", height: "53px" }}
            />
            Teams
          </h2>
          <p className="features__text">
            Collaborate with employees and
            <br /> accountant to track business operations with controls.
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
              src={clock}
              alt="timer"
              // style={{ width: "53px", height: "53px" }}
            />
            Dashboard
          </h2>
          <p className="features__text">
            Thoroughly analyze your business with an easy-to-read comprehensive
            dashboard.
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
