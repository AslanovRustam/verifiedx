import ScrollAnimation from "../../helpers/scrollAnimation";
import s from "./gotHere.module.css";

export default function GotHere() {
  return (
    <section className={s.section}>
      <ScrollAnimation>
        <h2 className={s.title}>
          How we got here and{" "}
          <span className={s.titleGreen}>where we’re going</span>
        </h2>
      </ScrollAnimation>
      <p className={s.subTitle}>
        Meet Our <span className={s.subTitleGreen}>Super Team & Advisor</span>
      </p>
    </section>
  );
}
