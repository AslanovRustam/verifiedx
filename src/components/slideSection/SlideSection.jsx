import s from "./slideSection.module.css";
import { ReactComponent as Icon1 } from "../../images/ready.svg";
import { ReactComponent as Icon2 } from "../../images/super.svg";
import { ReactComponent as Icon3 } from "../../images/university.svg";
import { ReactComponent as Icon4 } from "../../images/DataGuard.svg";
import { ReactComponent as Icon5 } from "../../images/yoti.svg";

export default function SlideSection({ green }) {
  return (
    <div className={s.section}>
      <div className={s.container}>
        <ul className={s.list}>
          <li className={s.item}>
            <Icon1 className={`${s.icon} ${green ? s.green : ""}`} />
          </li>
          <li className={s.item}>
            <Icon2 className={`${s.icon} ${green ? s.green : ""}`} />
          </li>
          <li className={s.item}>
            <Icon3 className={`${s.icon} ${green ? s.green : ""}`} />
          </li>
          <li className={s.item}>
            <Icon4 className={`${s.icon} ${green ? s.green : ""}`} />
          </li>
          <li className={s.item}>
            <Icon5 className={`${s.icon} ${green ? s.green : ""}`} />
          </li>
        </ul>
        <ul className={s.list}>
          <li className={s.item}>
            <Icon1 className={`${s.icon} ${green ? s.green : ""}`} />
          </li>
          <li className={s.item}>
            <Icon2 className={`${s.icon} ${green ? s.green : ""}`} />
          </li>
          <li className={s.item}>
            <Icon3 className={`${s.icon} ${green ? s.green : ""}`} />
          </li>
          <li className={s.item}>
            <Icon4 className={`${s.icon} ${green ? s.green : ""}`} />
          </li>
          <li className={s.item}>
            <Icon5 className={`${s.icon} ${green ? s.green : ""}`} />
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

{
  /* <ul className={s.list}>
  <li className={s.item}>
    <img className={s.icon} src={Icon1} alt="icon1" />
  </li>
  <li className={s.item}>
    <img className={s.icon} src={Icon2} alt="icon2" />
  </li>
  <li className={s.item}>
    <img className={s.icon} src={Icon3} alt="icon3" />
  </li>
  <li className={s.item}>
    <img className={s.icon} src={Icon4} alt="icon4" />
  </li>
  <li className={s.item}>
    <img className={s.icon} src={Icon5} alt="icon5" />
  </li>
</ul>; */
}
