import s from "./slideSection.module.css";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import icon5 from "../../images/icon5.png";

export default function SlideSection() {
  return (
    <div className={s.section}>
      <div className={s.container}>
        <ul className={s.list}>
          <li className={s.item}>
            <img className={s.icon} src={icon1} alt="icon1" />
          </li>
          <li className={s.item}>
            <img className={s.icon} src={icon2} alt="icon2" />
          </li>
          <li className={s.item}>
            <img className={s.icon} src={icon3} alt="icon3" />
          </li>
          <li className={s.item}>
            <img className={s.icon} src={icon4} alt="icon4" />
          </li>
          <li className={s.item}>
            <img className={s.icon} src={icon5} alt="icon5" />
          </li>
        </ul>
        <ul className={s.list}>
          <li className={s.item}>
            <img className={s.icon} src={icon1} alt="icon1" />
          </li>
          <li className={s.item}>
            <img className={s.icon} src={icon2} alt="icon2" />
          </li>
          <li className={s.item}>
            <img className={s.icon} src={icon3} alt="icon3" />
          </li>
          <li className={s.item}>
            <img className={s.icon} src={icon4} alt="icon4" />
          </li>
          <li className={s.item}>
            <img className={s.icon} src={icon5} alt="icon5" />
          </li>
        </ul>
      </div>
      <p className={s.text}>
        trusted by <span>7000+</span> games & <span>200+</span> countries &
        governments
      </p>
    </div>
  );
}
