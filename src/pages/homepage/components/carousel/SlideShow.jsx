import React, { useState, useEffect } from "react";
import "./slideshow.css";
// import { Carousel } from "react-responsive-carousel";
import slide1 from "../../../../assets/homepage/new/slide1.webp";
import slide2 from "../../../../assets/homepage/new/slide2.webp";
import slide3 from "../../../../assets/homepage/new/slide3.webp";
import slide4 from "../../../../assets/homepage/new/slide4.webp";
import slide5 from "../../../../assets/homepage/new/slide5.webp";
import avatar from "../../../../assets/homepage/new/slideshowavatar.webp";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

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
      <div className="slideshow__header">
        <img src={avatar} alt="illustrations" />
        <h1>What our clients says about us</h1>
      </div>

      {/* for desktops */}

      <div
        onMouseOver={() => setDelay(10000)}
        onMouseLeave={() => setDelay(2500)}
        className="slides-desktop"
        style={{ transform: `translate3d(${-index * 20}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <div className="slide-desktop" key={index}>
            <img src={image} alt="testimonials" />
          </div>
        ))}
        {/* <Carousel
          showArrows={true}
          showStatus={false}
          swipeable={true}
          showThumbs={false}
          centerMode
          infiniteLoop
          autoPlay={true}
          stopOnHover={true}
        >
          {images.map((img) => (
            <div style={{ margin: "0 3rem", borderRadius: "40px" }}>
              <img src={img} alt="testimonials" />
            </div>
          ))}
        </Carousel> */}
      </div>

      {/* for tablets */}

      <div
        className="slides-tablet"
        style={{ transform: `translate3d(${-index * 35}%, 0, 0)` }}
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

        {/* <Carousel
          showArrows={true}
          showIndicators={true}
          showStatus={false}
          swipeable={true}
          showThumbs={false}
          autoPlay={true}
        >
          {images.map((img) => (
            <div>
              <img src={img} alt="testimonials" />
            </div>
          ))}
        </Carousel> */}
      </div>
    </div>
  );
}
