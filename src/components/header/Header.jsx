import { useState } from "react";
import logo from "../../images/Logo.png";
import s from "./header.module.css";

export default function Header() {
  return (
    <div className={s.section}>
      <img className={s.logo} src={logo} alt="logo" />
      <div className={s.menu}>
        <div className={s.hamburger}>
          <div className={s.line}></div>
        </div>
        <span className={s.name}>Menu</span>
      </div>
      <a className={s.mail} href="mailto:info@verifiedx.me">
        info@verifiedx.me
      </a>
    </div>
  );
}
