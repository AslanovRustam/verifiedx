import { createPortal } from "react-dom";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import s from "./modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, showModal }) {
  useEffect(() => {
    document.body.classList.add(s.overvlow);
    return () => {
      document.body.classList.remove(s.overvlow);
    };
  }, []);
  return createPortal(
    <div
      className={`${s.modalBackDrop} ${showModal ? s.opacity : ""}`}
      onClick={() => onClose()}
    >
      <div className={`${s.container} ${showModal ? s.containerActive : ""}`}>
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
        <button className={s.btn} type="button">
          <a href="#footer">Contact Us</a>
        </button>
      </div>
    </div>,
    modalRoot
  );
}
