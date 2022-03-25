import React, { useEffect, useState } from "react";
import "./ConfirmationModal.scss";

import jacket from "../../assets/images/jacket.jpg";
import celeb from "../../assets/icons/celebration-icon.svg";
import x from "../../assets/icons/x.svg";
import energy from "../../assets/icons/energy-icon.svg";
import water from "../../assets/icons/water-icon.svg";

export default function ConfirmationModal({ closeModal, cost }) {
  let cpw = (Math.round(cost * 100) / 100).toFixed(2);
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
                <h2>{cpw}</h2>
              </div>
            </div>
            {/* <div className="modal__globe"> */}
            <img src={jacket} className="image"></img>
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
              <img className="metrics__icon" src={water}></img>
              <h4> You are saving 20,000 litres of water</h4>
            </div>
            <div className="modal__metrics">
              <img className="metrics__icon" src={energy}></img>
              <h4>
                You are saving something similar to the energy produced by 10
                light bulbs
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
