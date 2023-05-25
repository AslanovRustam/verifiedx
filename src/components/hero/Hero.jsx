import s from "./hero.module.css";
import planet from "../../images/Planet.png";
import r from "../../images/R.png";
import imageHero from "../../images/imageHero.png";

export default function () {
  return (
    <div className={s.section}>
      <div className={s.aside}>
        <div className={s.text}>
          <span className={s.textGreen}>Cross-Game</span>
          <span className={s.textWhite}>Avatar</span>
          <span className={s.textWhite}>Verification </span>
          <span className={s.textGreen}>for Web3</span>
          <span className={s.textGreen}>Gamers</span>
        </div>
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
        <button className={s.btn} type="button">
          Get in Touch
        </button>
      </div>
      <div className={s.images}>
        <img className={s.image} src={imageHero} alt="hero" />
      </div>
    </div>
  );
}
