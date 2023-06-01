import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.png";
import s from "./header.module.css";
import Modal from "../modal/modal";

export default function Header() {
  const [showModal, setShowmodal] = useState(false);

  const togleModal = () => {
    setShowmodal(!showModal);
  };
  return (
    <>
      <header className={s.section} id="header">
        <NavLink to="/">
          <img className={s.logo} src={logo} alt="logo" />
        </NavLink>
        <div className={s.menu} onClick={togleModal}>
          <div className={`${s.items} ${showModal && s.active}`}>
            <div className={s.item}></div>
            <div className={s.item}></div>
            <div className={s.item}></div>
          </div>
          <div>
            <span className={s.name}>Menu</span>
          </div>
        </div>
        <a className={s.mail} href="mailto:info@verifiedx.me">
          info@verifiedx.me
        </a>
      </header>
      {showModal && <Modal onClose={togleModal} />}
    </>
  );
}
