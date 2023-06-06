import s from "./mail..module.css";

export default function Mail() {
  return (
    <section className={s.section} id="joinUs">
      <h2 className={s.title}>
        mailto: <a href="mailTo:info@verifiedx.me">info@verifiedx.me</a>
      </h2>
      <a href="mailto:info@verifiedx.me">
        <button className={s.btn} type="button">
          Contact Us
        </button>
      </a>
    </section>
  );
}
