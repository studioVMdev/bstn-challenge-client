import React, { useEffect } from "react";
import { useState } from "react";
import "./PageCalculate.scss";

import InputTextArea from "../../components/inputs/InputTextArea/InputTextArea";
import InputSelect from "../../components/inputs/InputSelect/InputSelect";
import InputNumber from "../../components/inputs/InputNumber/InputNumber";
import InputText from "../../components/inputs/InputText/InputText";

import Button from "../../components/buttons/Button/Button";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";

const PageCalculate = () => {
  const [years, setYears] = useState([2022, 2021, 2020, 2019, 2018, 2017]);
  const [showModal, setShowModal] = useState(false);
  const [sendCPW, setSendCPW] = useState(0);

  const [year, setYear] = useState("");
  const handleOnYearChange = (e) => {
    setYear(e.target.value);
  };
  const [wears, setWears] = useState("");
  const handleWearsOnChange = (e) => {
    setWears(e.target.value);
  };

  const [cost, setCost] = useState("");
  const handleCostOnChange = (e) => {
    setCost(e.target.value);
  };

  const [cpw, setCpw] = useState("");

  const calculateCPW = () => {
    let result = cost / ((2023 - year) * 12 * wears);
    console.log("calculating...");
    console.log("result is: ", result);
    setCpw(result);
    if (year && cost && wears) {
      setSendCPW(result);
      setShowModal(true);
    }
    //! resets
    setYear("");
    setWears("");
    setCost("");
    setCpw(0);
  };

  useEffect(() => {
    cpw && console.log("showing modal");

    //!Show modal and pass cpd here
  }, [cpw]);

  const closeModal = (e) => {
    console.log(e);

    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <ConfirmationModal
          closeModal={closeModal}
          cpw={sendCPW}
        ></ConfirmationModal>
      )}
      <section className="page-title">
        <div className="page-title__container">
          <h1 className="page-title__heading">The CPW of your Garment</h1>
        </div>
      </section>

      <section className="upload">
        <h5 className="step-label">Step 1/3</h5>
        <div className="upload__container">
          <h4 className="upload__subheading app">
            Upload an Image of your item
          </h4>

          <div className="upload__icons-container">
            <div className="upload__icon"></div>
          </div>

          <div className="upload__image">Image swapped here</div>
        </div>

        <InputTextArea name="description" label="Description" />
      </section>

      <section className="details">
        <div className="details__container">
          <InputText label="Brand" />
          <InputSelect
            options={["S", "M", "L"]}
            label="Size"
            // handleOnChange={}
          />
        </div>
      </section>

      <section className="calculator">
        <div className="calculator__container">
          <div className="calculator__wrapper">
            <InputSelect
              options={years}
              label="Year bought"
              handleOnChange={handleOnYearChange}
            />

            <InputNumber
              label="Wears p/month"
              value={wears}
              handleOnChange={handleWearsOnChange}
            />

            <InputNumber
              label="£ Cost of item"
              value={cost}
              handleOnChange={handleCostOnChange}
            />
          </div>

          <Button
            variant="primary"
            value="Calculate"
            icon=""
            id=""
            handleClick={calculateCPW}
          />
        </div>
      </section>
    </>
  );
};

export default PageCalculate;
