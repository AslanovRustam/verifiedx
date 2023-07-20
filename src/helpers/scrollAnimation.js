import React, { useEffect, useRef, useState } from "react";
import s from "./scrollAnimation.module.css";

const ScrollAnimation = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef}>
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className={`${s.animation} ${isVisible ? s.visible : ""}`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimation;

// const ScrollAnimation = ({ children }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (ref.current) {
//         const top = ref.current.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;
//         setIsVisible(top < windowHeight);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Проверяем видимость блока при первой загрузке

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div ref={ref} className={`${s.animation} ${isVisible ? s.visible : ""}`}>
//       {children}
//     </div>
//   );
// };

// export default ScrollAnimation;
