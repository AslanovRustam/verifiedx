import s from "./modal.module.css";
import { createPortal } from "react-dom";
import { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose }) {
  useEffect(() => {
    document.body.classList.add(s.overvlow);
    return () => {
      document.body.classList.remove(s.overvlow);
    };
  }, []);

  return createPortal(
    <div className={s.modalBackDrop} onClick={() => onClose()}>
      <div className={s.container}>
        <ul>
          <li>Home</li>
          <li>Benefits</li>
          <li>How it works</li>
          <li>Join us</li>
          <li>About us</li>
        </ul>
        <button className={s.btn} type="button">
          Get in Touch
        </button>
      </div>
    </div>,
    modalRoot
  );
}
