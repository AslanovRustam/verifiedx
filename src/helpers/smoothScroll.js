import { useRef } from "react";

const SmoothScrollTo = ({ targetId, children }) => {
  const scrollRef = useRef(null);

  const handleClick = () => {
    if (document.getElementById(targetId)) {
      const element = document.getElementById(targetId);
      const topOffset = document.getElementById("header").offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;
      window.scrollBy({
        behavior: "smooth",
        top: offsetPosition,
      });
      return;
    }
    return;
  };

  return (
    <div ref={scrollRef} onClick={handleClick}>
      {children}
    </div>
  );
};
export default SmoothScrollTo;
