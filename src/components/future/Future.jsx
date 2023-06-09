import ScrollAnimation from "../../helpers/scrollAnimation";
import s from "./future.module.css";

export default function Future() {
  return (
    <section className={s.section} id="joinUs">
      <div className={s.wrapper}>
        <ScrollAnimation>
          <h2 className={s.title}>
            Empowering <span className={s.titleGreen}>the Future</span> of Web3
            Gaming
          </h2>
        </ScrollAnimation>
        <p className={s.subTitle}>
          Join Us in Creating a Safer Gaming Landscape
        </p>
        <span className={s.description}>
          We are actively seeking pre-seed funding to fuel our expansion and
          enhance our cutting-edge technology. If you share our vision and are
          interested in becoming and investor, we invite you to get in touch
          with us so you can{" "}
          <a href="mailto:info@verifiedx.me">try out our prototype</a>
        </span>
        <a href="mailto:info@verifiedx.me">
          <button className={s.btn} type="button">
            Get in Touch
          </button>
        </a>
      </div>
    </section>
  );
}
