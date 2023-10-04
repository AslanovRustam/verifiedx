import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.png";
import s from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={s.section} id="footer">
      <NavLink to="/">
        <img className={s.logo} src={logo} alt="logo" />
      </NavLink>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to="/" className={s.navlink}>
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <a href="#benefits">Benefits</a>
        </li>
        <li className={s.item}>
          <a href="#works">How it works</a>
        </li>
        <li className={s.item}>
          <a href="#joinUs">Join us</a>
        </li>
        <li className={s.item}>
          <NavLink to="/about" className={s.navlink}>
            About us
          </NavLink>
        </li>
      </ul>
      <div className={s.info}>
        <span className={s.rights}>© 2023 All right reserved</span>
        <a className={s.mail} href="mailto:info@verifiedx.me">
          Send us a message
        </a>
      </div>
    </footer>
  );
}
