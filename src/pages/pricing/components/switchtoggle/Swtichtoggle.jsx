import React, { useState } from "react";
import "./switchtoggle.css";

export default function Swtichtoggle({ setPlan }) {
  const [toggle, setToggle] = useState(false);

  function handleMonthClick() {
    setToggle(true);
    setPlan(true);
  }
  function handleYearClick() {
    setToggle(false);
    setPlan(false);
  }

  return (
    <div className="switch__container">
      <span
        onClick={handleMonthClick}
        className={toggle ? "switch" : "switch-inactive"}
      >
        monthly
      </span>
      <span
        onClick={handleYearClick}
        className={toggle ? "switch-inactive" : "switch"}
      >
        yearly
      </span>
    </div>
  );
}
