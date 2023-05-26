import s from "./slider.module.css";
import { useState, useEffect, useRef } from "react";
import Arrow from "./Arrow";
import Dots from "./Dots";

export default function Slider({ sliderList }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [window, setWindow] = useState(0);
  const [itemOffset, setItemOffset] = useState(100);

  const windowElRef = useRef();
  //////////////////////////////
  const length = sliderList.length - 1;

  useEffect(() => {
    const windowWidth = windowElRef.current.offsetWidth;
    // setWindow(windowElRef.current.scrollWidth-windowElRef.current.offsetWidth)
    setWindow(windowWidth);
    const startOffset = activeIndex * itemOffset;
  }, [window]);
  useEffect(() => {
    // if (window < 768) {
    //   return;
    // }
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
      setOffset(activeIndex === length ? 0 : -(activeIndex + 1) * itemOffset);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, offset, window]);
  //////////////////////////////

  const PrevSlideClick = () => {
    setActiveIndex(activeIndex === 0 ? 0 : activeIndex - 1);
    setOffset(Math.min(offset + itemOffset, 0));
  };
  const NextSlideClick = () => {
    setActiveIndex(activeIndex > length - 1 ? activeIndex : activeIndex + 1);
    // setOffset(Math.max(offset - itemOffset, -length * itemOffset));
    setOffset(
      activeIndex === length
        ? -activeIndex * itemOffset
        : -(activeIndex + 1) * itemOffset
    );
  };
  return (
    <section className={s.sliderList}>
      <ul className={s.window} ref={windowElRef}>
        {sliderList.map((item, index) => (
          <li className={s.itemBox}>
            <p className={s.itemTitle}>{item.title}</p>
            <span className={s.itemDescription}>{item.description}</span>
          </li>
        ))}
      </ul>
      <Arrow prevSlide={PrevSlideClick} nextSlide={NextSlideClick} />
      <Dots
        activeIndex={activeIndex}
        sliderList={sliderList}
        onClick={(activeIndex) => {
          setActiveIndex(activeIndex);
          setOffset(
            activeIndex === 0
              ? activeIndex * itemOffset
              : activeIndex * -itemOffset
          );
        }}
      />
    </section>
  );
}
