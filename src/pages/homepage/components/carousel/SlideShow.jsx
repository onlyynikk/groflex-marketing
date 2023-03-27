import React, { useState, useEffect } from "react";
import "./slideshow.css";

import slide1 from "../../../../assets/slide1.jpeg";
import slide2 from "../../../../assets/slide2.jpeg";
import slide3 from "../../../../assets/slide3.jpeg";
import slide4 from "../../../../assets/slide4.jpeg";
import slide5 from "../../../../assets/slide5.jpeg";

const images = [slide1, slide2, slide3, slide4, slide5];

export default function SlideShow() {
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(2500);
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
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <h1>Testimonials</h1>

      {/* for desktops */}

      <div
        onMouseOver={() => setDelay(10000)}
        onMouseLeave={() => setDelay(2500)}
        className="slides-desktop"
        style={{ transform: `translate3d(${-index * 60}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <div className="slide-desktop" key={index}>
            <img src={image} alt="testimonials" />
          </div>
        ))}
      </div>

      {/* for tablets */}

      <div
        className="slides-tablet"
        style={{ transform: `translate3d(${-index * 65}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <div className="slide-tablet" key={index}>
            <img src={image} alt="testimonials" />
          </div>
        ))}
      </div>

      {/* for phones */}

      <div
        className="slides-phone"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <div className="slide-phone" key={index}>
            <img src={image} alt="testimonials" />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
