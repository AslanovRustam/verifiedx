import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import s from "./slider.module.css";
import NavBtn from "./navBtn";

export default function Slider({ items }) {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(viewportWidth);
  return (
    <section className={s.sliderList}>
      <Swiper
        className={s.swiperSlider}
        spaceBetween={viewportWidth < 376 ? 39 : 160}
        modules={[Pagination, Navigation, Scrollbar]}
        slidesPerView={viewportWidth < 376 ? 1.5 : 2.5}
        // navigation
        pagination={{ type: "fraction" }}
        scrollbar={{ draggable: true }}
      >
        <ul className={s.window}>
          {items.map((item) => (
            <SwiperSlide key={item.title}>
              <li className={s.itemBox}>
                <p className={s.itemTitle}>{item.title}</p>
                <span className={s.itemDescription}>{item.description}</span>
              </li>
            </SwiperSlide>
          ))}
        </ul>
        <NavBtn />
      </Swiper>
    </section>
  );
}
