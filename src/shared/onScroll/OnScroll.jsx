import { useEffect, useRef } from "react";

export default function OnScroll({ onScroll, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleOnScroll = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onscroll && onscroll();
      }
    };
    document.addEventListener("onscroll", handleOnScroll, true);
    return () => {
      document.removeEventListener("onscroll", handleOnScroll, true);
    };
  }, [onScroll]);

  return (
    <div ref={ref} className="info-box">
      {children}
    </div>
  );
}
