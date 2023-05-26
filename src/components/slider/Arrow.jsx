import styles from "./slider.module.css";
import arrow from "../../images/arrow.png";
export default function Arrow({ prevSlide, nextSlide }) {
  return (
    <div className={styles.arrows}>
      <span className={styles.prev} onClick={prevSlide}>
        <img className={styles.arrowLeft} src={arrow} alt="arrow" />
      </span>
      <span className={styles.next} onClick={nextSlide}>
        <img className={styles.arrowRight} src={arrow} alt="arrow" />
      </span>
    </div>
  );
}
