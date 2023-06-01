import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.png";
import s from "./footer.module.css";
import SmoothScrollTo from "../../helpers/smoothScroll";

export default function Footer() {
  return (
    <footer className={s.section} id="footer">
      <NavLink to="/">
        <img className={s.logo} src={logo} alt="logo" />
      </NavLink>
      <ul className={s.list}>
        <li className={s.item}>
          <SmoothScrollTo targetId="home">Home </SmoothScrollTo>
        </li>
        <li className={s.item}>
          <SmoothScrollTo targetId="benefits">Benefits </SmoothScrollTo>
        </li>
        <li className={s.item}>
          <SmoothScrollTo targetId="works">How it works</SmoothScrollTo>
        </li>
        <li className={s.item}>
          <SmoothScrollTo targetId="joinUs">Join us </SmoothScrollTo>
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
