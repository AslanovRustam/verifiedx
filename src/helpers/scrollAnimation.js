import { useEffect, useRef, useState } from "react";
import s from "./scrollAnimation.module.css";

const ScrollAnimation = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Проверяем видимость блока при первой загрузке

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className={`${s.animation} ${isVisible ? s.visible : ""}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
