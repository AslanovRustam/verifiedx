import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import s from "./reviews.module.css";
import NavBtn from "./navBtn";

export default function Reviews({ items }) {
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

  return (
    <section className={s.sliderList}>
      <div className={s.wrapper}>
        <Swiper
          className={s.swiperSlider}
          spaceBetween={viewportWidth < 376 ? 39 : 160}
          modules={[Pagination, Navigation, Scrollbar]}
          slidesPerView={viewportWidth < 376 ? 1.5 : 2}
          // pagination={{ type: "fraction" }}
          scrollbar={{ draggable: true }}
        >
          <ul className={s.window}>
            {items.map((item) => (
              <SwiperSlide key={item.title1}>
                <li className={s.itemBox}>
                  <p className={s.itemDescription}>{item.description}</p>
                  <p className={s.itemTitle}>{item.title1}</p>
                  <p className={s.itemTitle}>{item.title2}</p>
                </li>
              </SwiperSlide>
            ))}
          </ul>
          <NavBtn />
        </Swiper>
      </div>
    </section>
  );
}
