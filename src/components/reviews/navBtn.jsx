import { useSwiper } from "swiper/react";
import arrow from "../../images/arrow.png";
import arrowRight from "../../images/arrowRight.png";
import s from "./reviews.module.css";

export default function NavBtn() {
  const swiper = useSwiper();
  return (
    <div className={s.swiperBtns}>
      <div className={s.btnNext} onClick={() => swiper.slidePrev()}>
        <img src={arrow} alt="next slide" />
      </div>
      <div className={s.btnPrev} onClick={() => swiper.slideNext()}>
        <img src={arrowRight} alt="prev slide" />
      </div>
    </div>
  );
}
