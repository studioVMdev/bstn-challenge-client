import React, { useEffect, useState } from "react";
import "./ConfirmationModal.scss";
import globe from "./globe-svgrepo-com.svg";
import celeb from "./ic_twotone-celebration.svg";
import x from "./x.svg";
import energy from "./energy-icon.svg";
import water from "./water-icon.svg";

export default function ConfirmationModal({ closeModal, cpw }) {
  cpw = (Math.round(cpw * 100) / 100).toFixed(2);
  return (
    <>
      <div className="modal">
        <div className="modal__wrapper">
          <div className="modal__exit-button">
            <img
              src={x}
              onClick={(e) => {
                closeModal();
              }}
            ></img>
          </div>
          <div className="modal__container">
            <div className="modal__text">
              <h4>Your item's CPW is: </h4>
              <div className="modal__cpw">
                <h2>£{cpw}</h2>
              </div>
            </div>
            {/* <div className="modal__globe"> */}
            <img src={globe} className="icon"></img>
            {/* </div> */}
            <div className="modal__celebration">
              <div className="celebration__image">
                <img src={celeb} className="celebration__icon"></img>
              </div>
              <h4 className="celebration__text">Hurrah!</h4>
            </div>
            <div className="modal__message">
              <h4>You are helping the planet by wasting less!</h4>
            </div>
            <div className="modal__metrics">
              <img className="metrics__icon" src={energy}></img>
              <h4> you're saving the planet!</h4>
            </div>
            <div className="modal__metrics">
              <img className="metrics__icon" src={water}></img>
              <h4> you're saving the planet!</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
