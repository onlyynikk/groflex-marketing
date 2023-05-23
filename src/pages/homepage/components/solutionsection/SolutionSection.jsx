import React, { useState, useEffect } from "react";
import "./solutionsection.css";
import manu from "../../../../assets/homepage/new/manu.webp";
import ecom from "../../../../assets/homepage/new/ecom.webp";
import hospitality from "../../../../assets/homepage/new/hospitality.webp";
import retail from "../../../../assets/homepage/new/retail.webp";
import health from "../../../../assets/homepage/new/health.webp";
import food from "../../../../assets/homepage/new/food.webp";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const slides = [
  {
    id: 1,
    title: "Manufacturing",
    para: " Drive your automation in controlling inventory, manufacturing processes, and accounting functions with grofleX.",
    link: "/solutions/manufacture",
  },
  {
    id: 2,
    title: "Retail",
    para: " Keep your transaction records steady and reconciling processes easy with GrofleX to get a real-time financial data.",
    link: "/solutions/retail",
  },
  {
    id: 3,
    title: "E-Commerce",
    para: "Show your financial overview in one place. Grow your business internationally with our multi-currency features",
    link: "/solutions/E-commerce",
  },
  {
    id: 4,
    title: " Food & Beverages",
    para: "   Control your inventory such as material purchase and other operations to reducing any wastage with ease.",
    link: "/solutions/food&beverage",
  },
  {
    id: 5,
    title: "Health & Wellness",
    para: "  grofleX provides your health and wellness business by automate your bookkeeping within few minutes.",
    link: "/solutions/health&wellness",
  },
  {
    id: 6,
    title: "Hospitality",
    para: " Having the flexibility in every transactions is our key feature. Experience our user friendly tools and see the changes in your business.",
    link: "/solutions/hospitality",
  },
];

export default function SolutionSection() {
  const initalState = 1;
  const [count, setCount] = useState(initalState);
  const [index, setIndex] = useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count >= 6) {
        setCount(1);
      } else {
        setCount(count + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="solutionsection__container">
      <div>
        <div className="solutionsection__title">
          <h1>Find your business solutions here</h1>
        </div>
        <div
          className={
            count === 1
              ? "solutionsection__img-visible"
              : "solutionsection__img-hidden"
          }
        >
          <img src={manu} alt="one" />
        </div>
        <div
          className={
            count === 2
              ? "solutionsection__img-visible"
              : "solutionsection__img-hidden"
          }
        >
          <img src={retail} alt="one" />
        </div>
        <div
          className={
            count === 3
              ? "solutionsection__img-visible"
              : "solutionsection__img-hidden"
          }
        >
          <img src={ecom} alt="one" />
        </div>
        <div
          className={
            count === 4
              ? "solutionsection__img-visible"
              : "solutionsection__img-hidden"
          }
        >
          <img src={food} alt="one" />
        </div>
        <div
          className={
            count === 5
              ? "solutionsection__img-visible"
              : "solutionsection__img-hidden"
          }
        >
          <img src={health} alt="one" />
        </div>
        <div
          className={
            count === 6
              ? "solutionsection__img-visible"
              : "solutionsection__img-hidden"
          }
        >
          <img src={hospitality} alt="one" />
        </div>
      </div>

      {/* <div className="solutionsection__content--wrapper">
        <div className="solutionsection__description" id="1">
          <h2
            className={
              count === 1 ? "solutionsection__h2-active" : "solutionsection__h2"
            }
          >
            Manufacturing
          </h2>
          <p>
            Drive your automation in controlling inventory, manufacturing
            processes, and accounting functions with grofleX.
          </p>
          <Link to="/solutions/manufacture">see more</Link>
        </div>
        <div className="solutionsection__description" id="2">
          <h2
            className={
              count === 2 ? "solutionsection__h2-active" : "solutionsection__h2"
            }
          >
            Retail
          </h2>
          <p>
            Keep your transaction records steady and reconciling processes easy
            with GrofleX to get a real-time financial data.
          </p>
          <Link to="/solutions/retail">see more</Link>
        </div>
        <div className="solutionsection__description" id="3">
          <h2
            className={
              count === 3 ? "solutionsection__h2-active" : "solutionsection__h2"
            }
          >
            E-commerce
          </h2>
          <p>
            Show your financial overview in one place. Grow your business
            internationally with our multi-currency features
          </p>
          <Link to="/solutions/E-commerce">see more</Link>
        </div>
        <div className="solutionsection__description" id="4">
          <h2
            className={
              count === 4 ? "solutionsection__h2-active" : "solutionsection__h2"
            }
          >
            Food & Beverages
          </h2>
          <p>
            Control your inventory such as material purchase and other
            operations to reducing any wastage with ease.
          </p>
          <Link to="/solutions/food&beverage">see more</Link>
        </div>
        <div className="solutionsection__description" id="5">
          <h2
            className={
              count === 5 ? "solutionsection__h2-active" : "solutionsection__h2"
            }
          >
            Health & Wellness
          </h2>
          <p>
            grofleX provides your health and wellness business by automate your
            bookkeeping within few minutes.
          </p>
          <Link to="/solutions/health&wellness">see more</Link>
        </div>
        <div className="solutionsection__description" id="6">
          <h2
            className={
              count === 6 ? "solutionsection__h2-active" : "solutionsection__h2"
            }
          >
            Hospitality
          </h2>
          <p>
            Having the flexibility in every transactions is our key feature.
            Experience our user friendly tools and see the changes in your
            business.
          </p>
          <Link to="/solutions/hospitality">see more</Link>
        </div>
      </div> */}
      <div
        className="solutionsection-desktop"
        style={{ transform: `translate3d(${-index * 15}%, 0, 0)` }}
      >
        {slides.map((slide, index) => (
          <div className="solutions-box" key={index}>
            <h2
              className={
                count === slide.id
                  ? "solutionsection__h2-active"
                  : "solutionsection__h2"
              }
            >
              {slide.title}
            </h2>
            <p>{slide.para}</p>
            <Link to={slide.link}>see more</Link>
          </div>
        ))}
      </div>
      <div
        className="solutionsection-tablet"
        style={{ transform: `translate3d(${-index * 25}%, 0, 0)` }}
      >
        {slides.map((slide, index) => (
          <div className="solutions-box" key={index}>
            <h2
              className={
                count === slide.id
                  ? "solutionsection__h2-active"
                  : "solutionsection__h2"
              }
            >
              {slide.title}
            </h2>
            <p>{slide.para}</p>
            <Link to={slide.link}>see more</Link>
          </div>
        ))}
      </div>
      <div
        className="solutionsection-mobile"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slide, index) => (
          <div className="solutions-box" key={index}>
            <h2
              className={
                count === slide.id
                  ? "solutionsection__h2-active"
                  : "solutionsection__h2"
              }
            >
              {slide.title}
            </h2>
            <p>{slide.para}</p>
            <Link to={slide.link}>see more</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
