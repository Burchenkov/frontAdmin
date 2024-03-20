import React, { useState, useEffect } from "react";
import close from "./assets/images/close.png";
import ozon from "./assets/images/ozon.png";
import ga from "./assets/images/gold-apple.png";

const Modal = ({ active, setActive }) => {

  return (
    <>
      {" "}
      <div
        className={active ? "modal modal__active" : "modal"}
        onClick={() => setActive(false)}
      >
        <div
          className={active ? "modal__cont modal__cont__active" : "modal__cont"}
          onClick={(e) => e.stopPropagation()}
        >
          <div onClick={() => setActive(false)} className="close-btn">
            <img src={close} alt="modal close button" />
          </div>
          <a href="https://www.ozon.ru" target="_blank" className="modal-inf">
            <img className="inf-img" src={ozon} alt="ozon" />
            <p>Купить на Озон</p>
          </a>
          <a href="https://goldapple.ru" target="_blank" className="modal-inf">
            <img className="inf-img" src={ga} alt="gold apple" />
            <p>Купить в Золотом яблоке</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Modal;
