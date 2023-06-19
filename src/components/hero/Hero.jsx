import ScrollAnimation from "../../helpers/scrollAnimation";
import s from "./hero.module.css";
import planet from "../../images/Planet.png";
import r from "../../images/R.png";
import imageHero from "../../images/imageHero.png";
import coin from "../../images/coin.png";

export default function () {
  return (
    <section className={s.section} id="home">
      <div className={s.aside}>
        <ScrollAnimation>
          {" "}
          <div className={s.text}>
            <span className={s.textGreen}>Cross-Game</span>
            <span className={s.textWhite}>Avatar</span>
            <span className={s.textWhite}>Verification </span>
            <span className={s.textGreen}>for Web3</span>
            <span className={s.textGreen}>Gamers</span>
          </div>
        </ScrollAnimation>

        <div className={s.wrapper}>
          <div className={s.icons}>
            <img className={s.iconItem} src={planet} alt="planet" />
            <img className={s.iconItem} src={r} alt="r" />
          </div>
          <div className={s.description}>
            <p>Securely explore endless worlds</p>
            <p>with your verified avatars</p>
          </div>
        </div>
        <a href="mailto:info@verifiedx.me">
          {" "}
          <button className={s.btn} type="button">
            Get in Touch
          </button>
        </a>
      </div>
      <div className={s.images}>
        <img className={s.image} src={imageHero} alt="hero" />
        <img className={s.coin} src={coin} alt="coin" />
      </div>
    </section>
  );
}
