import logo from "../../images/Logo.png";
import s from "./footer.module.css";

export default function Footer() {
  return (
    <div className={s.section}>
      <img className={s.logo} src={logo} alt="logo" />
      <ul className={s.list}>
        <li className={s.item}>Home</li>
        <li className={s.item}>Benefits</li>
        <li className={s.item}>How it works</li>
        <li className={s.item}>Join us</li>
        <li className={s.item}>About us</li>
      </ul>

      <div className={s.info}>
        <span className={s.rights}>© 2023 All right reserved</span>
        <a className={s.mail} href="mailto:info@verifiedx.me">
          Send us a message
        </a>
      </div>
    </div>
  );
}
