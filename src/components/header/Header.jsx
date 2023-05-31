import { useState } from "react";
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
      <div className={s.section}>
        <img className={s.logo} src={logo} alt="logo" />
        <div className={s.menu} onClick={togleModal}>
          <div className={`${s.items} ${showModal && s.active}`}>
            <div className={s.item}></div>
            <div className={s.item}></div>
            <div className={s.item}></div>
          </div>
          <div>
            <p className={s.name}>Menu</p>
          </div>
        </div>
        <a className={s.mail} href="mailto:info@verifiedx.me">
          info@verifiedx.me
        </a>
      </div>
      {showModal && <Modal onClose={togleModal} />}
    </>
  );
}
