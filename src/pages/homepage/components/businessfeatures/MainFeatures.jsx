import React, { useState } from "react";
import "./mainfeatures.css";
import arrow from "../../../../assets/leftarrow.svg";
import { Link } from "react-router-dom";
import Inventory from "./components/Inventory";
import Crm from "./components/Crm";
import Billing from "./components/Billing";
import Hr from "./components/Hr";
import Commerce from "./components/Commerce";
import Supply from "./components/Supply";

export default function MainFeatures() {
  const [inventory, setInventory] = useState(true);
  const [crm, setCrm] = useState(false);
  const [billing, setBilling] = useState(false);
  const [hr, setHr] = useState(false);
  const [commerce, setCommerce] = useState(false);
  const [supplyChain, setSupplyChain] = useState(false);
  const [number, setNumber] = useState(1);

  function handleClickInventory() {
    setInventory(true);
    setBilling(false);
    setCommerce(false);
    setCrm(false);
    setHr(false);
    setSupplyChain(false);
  }

  function handleClickCrm() {
    setInventory(false);
    setCrm(true);
    setBilling(false);
    setCommerce(false);
    setHr(false);
    setSupplyChain(false);
  }

  function handleClickBilling() {
    setInventory(false);
    setCrm(false);
    setBilling(!billing);
    setCommerce(false);
    setHr(false);
    setSupplyChain(false);
  }

  function handleClickHr() {
    setInventory(false);
    setCrm(false);
    setBilling(false);
    setHr(true);
    setCommerce(false);
    setSupplyChain(false);
  }

  function handleClickCommerce() {
    setInventory(false);
    setCrm(false);
    setBilling(false);
    setHr(false);
    setCommerce(true);
    setSupplyChain(false);
  }

  function handleClickSupply() {
    setInventory(false);
    setCrm(false);
    setBilling(false);
    setHr(false);
    setCommerce(false);
    setSupplyChain(true);
  }

  return (
    <div className="mainfeatures__container">
      <h1>Keep your business steady with grofleX</h1>
      <div className="mainfeatures__wrapper">
        <div className="wrapper__img--content">
          <div className={inventory ? "visible-div" : "hidden-div"}>
            <Inventory />
          </div>
          <div className={crm ? "visible-div" : "hidden-div"}>
            <Crm />
          </div>
          <div className={billing ? "visible-div" : "hidden-div"}>
            <Billing />
          </div>
          <div className={hr ? "visible-div" : "hidden-div"}>
            <Hr />
          </div>
          <div className={commerce ? "visible-div" : "hidden-div"}>
            <Commerce />
          </div>
          <div className={supplyChain ? "visible-div" : "hidden-div"}>
            <Supply />
          </div>
        </div>
        <div className="wrapper__list--content">
          <div className="countdown">
            <p>
              <span style={{ fontWeight: "700", color: "black" }}>
                {inventory && "01"}
                {crm && "02"}
                {billing && "03"}
                {hr && "04"}
                {commerce && "05"}
                {supplyChain && "06"}
              </span>
              /06
            </p>
          </div>
          <div className="features__list-btns">
            <div className={inventory ? "features__list-btn" : "text-right"}>
              <img
                src={arrow}
                alt="left arrow"
                className={inventory ? "arrow-active" : "arrow-inactive"}
              />
              <Link
                onClick={handleClickInventory}
                className={
                  inventory
                    ? "features__list-btn-active"
                    : "features__list-btn-gray"
                }
              >
                Inventory
              </Link>
            </div>
            <div className={crm ? "features__list-btn" : "text-right"}>
              <img
                src={arrow}
                alt="left arrow"
                className={crm ? "arrow-active" : "arrow-inactive"}
              />
              <Link
                onClick={handleClickCrm}
                className={
                  crm ? "features__list-btn-active" : "features__list-btn-gray"
                }
              >
                CRM
              </Link>
            </div>
            <div className={billing ? "features__list-btn" : "text-right"}>
              <img
                src={arrow}
                alt="left arrow"
                className={billing ? "arrow-active" : "arrow-inactive"}
              />
              <Link
                onClick={handleClickBilling}
                className={
                  billing
                    ? "features__list-btn-active"
                    : "features__list-btn-gray"
                }
              >
                PoS
              </Link>
            </div>
            <div className={hr ? "features__list-btn" : "text-right"}>
              <img
                src={arrow}
                alt="left arrow"
                className={hr ? "arrow-active" : "arrow-inactive"}
              />
              <Link
                onClick={handleClickHr}
                className={
                  hr ? "features__list-btn-active" : "features__list-btn-gray"
                }
              >
                HRM
              </Link>
            </div>
            <div className={commerce ? "features__list-btn" : "text-right"}>
              <img
                src={arrow}
                alt="left arrow"
                className={commerce ? "arrow-active" : "arrow-inactive"}
              />
              <Link
                onClick={handleClickCommerce}
                className={
                  commerce
                    ? "features__list-btn-active"
                    : "features__list-btn-gray"
                }
              >
                E-com
              </Link>
            </div>
            <div className={supplyChain ? "features__list-btn" : "text-right"}>
              <img
                src={arrow}
                alt="left arrow"
                className={supplyChain ? "arrow-active" : "arrow-inactive"}
              />
              <Link
                onClick={handleClickSupply}
                className={
                  supplyChain
                    ? "features__list-btn-active"
                    : "features__list-btn-gray"
                }
              >
                SCM
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mainfeatures__wrapper-tablet">
        <div className="countdown-mobile"></div>
        <div className="mainfeatures__list--btns">
          <p className="mainfeatures__list--btn">
            {number === 1
              ? "Inventory"
              : "" || number === 2
              ? "CRM"
              : "" || number === 3
              ? "PoS"
              : "" || number === 4
              ? "HRM"
              : "" || number === 5
              ? "E-Commerce"
              : "" || number === 6
              ? "SCM"
              : ""}
          </p>
          <p className="countdown-mobile">
            <span style={{ fontWeight: "700", color: "black" }}>0{number}</span>
            /06
          </p>
        </div>
        <div className="mainfeatures__content">
          {number === 1 ? (
            <Inventory setNumber={setNumber} number={number} />
          ) : "" || number === 2 ? (
            <Crm setNumber={setNumber} number={number} />
          ) : "" || number === 3 ? (
            <Billing setNumber={setNumber} number={number} />
          ) : "" || number === 4 ? (
            <Hr setNumber={setNumber} number={number} />
          ) : "" || number === 5 ? (
            <Commerce setNumber={setNumber} number={number} />
          ) : "" || number === 6 ? (
            <Supply setNumber={setNumber} number={number} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
