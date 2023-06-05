import s from "./avatars.module.css";
import avatar1 from "../../images/avatar1.png";
import avatar2 from "../../images/avatar2.png";
import avatar3 from "../../images/avatar3.png";
import coin from "../../images/coin.png";

export default function Avatars() {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <img className={s.avatar} src={avatar1} alt="avatar1" />
        <img className={s.coin} src={coin} alt="coin" />
        <p className={s.name}>
          Kan Kouadio <br></br>The Mastermind (CEO)
        </p>
      </li>
      <li className={s.item}>
        <img className={s.avatar} src={avatar2} alt="avatar2" />
        <img className={s.coin} src={coin} alt="coin" />
        <p className={s.name}>
          Andrew Mikhailov - The Wizard of Product (Lead Engineer)
        </p>
      </li>
      <li className={s.item}>
        <img className={s.avatar} src={avatar3} alt="avatar3" />
        <img className={s.coin} src={coin} alt="coin" />
        <p className={s.name}>
          Sheila Khan - The Wise Owl (Advisor). Ex EA, Hasbro, Meta Reality
          Labs.
        </p>
      </li>
    </ul>
  );
}
