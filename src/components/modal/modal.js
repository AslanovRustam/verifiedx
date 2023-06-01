import { createPortal } from "react-dom";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SmoothScroll from "../../helpers/smoothScroll";
import s from "./modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose }) {
  useEffect(() => {
    document.body.classList.add(s.overvlow);
    return () => {
      document.body.classList.remove(s.overvlow);
    };
  }, []);

  return createPortal(
    // return (
    <div className={s.modalBackDrop} onClick={() => onClose()}>
      <div className={s.container}>
        <ul className={s.list}>
          <SmoothScroll targetId="home">
            <li className={s.item}>Home</li>
          </SmoothScroll>
          <SmoothScroll targetId="benefits">
            <li className={s.item}>Benefits</li>
          </SmoothScroll>
          <SmoothScroll targetId="works">
            <li className={s.item}>How it works</li>
          </SmoothScroll>
          <SmoothScroll targetId="joinUs">
            <li className={s.item}>Join us</li>
          </SmoothScroll>
          <li className={s.item}>
            <NavLink to="/about" className={s.navlink}>
              About us
            </NavLink>
          </li>
        </ul>
        <SmoothScroll targetId="footer">
          <button className={s.btn} type="button">
            Contact Us
          </button>
        </SmoothScroll>
      </div>
      {/* </div> */}
    </div>,
    modalRoot
  );
}
