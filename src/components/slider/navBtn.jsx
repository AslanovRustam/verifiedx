import { useSwiper } from "swiper/react";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import { ReactComponent as ArrowRight } from "../../images/arrowRight.svg";
import s from "./slider.module.css";

export default function NavBtn() {
  const swiper = useSwiper();
  return (
    <div className={s.swiperBtns}>
      <div className={s.btnNext} onClick={() => swiper.slidePrev()}>
        <Arrow />
      </div>
      <div className={s.btnPrev} onClick={() => swiper.slideNext()}>
        <ArrowRight />
      </div>
    </div>
  );
}
