import React, { useEffect } from "react";
import { useState } from "react";
import "./PageCalculate.scss";

import InputTextArea from "../../components/inputs/InputTextArea/InputTextArea";
import InputSelect from "../../components/inputs/InputSelect/InputSelect";
import InputNumber from "../../components/inputs/InputNumber/InputNumber";
import InputText from "../../components/inputs/InputText/InputText";

import Button from "../../components/buttons/Button/Button";

const PageCalculate = () => {
	const [years, setYears] = useState([2022, 2021, 2020, 2019, 2018, 2017]);

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

	const [cpw, setCpw] = useState(0);

	const calculateCPW = () => {
		let result = "";

		result = cost / ((2023 - year) * 12 * wears);
		console.log("calculating...");
		console.log("result is: ", result);

		setCpw(result);
		//! resets
		setYear("");
		setWears("");
		setCost("");
	};

	useEffect(() => {
		cpw && console.log("showing modal");
		//!Show modal and pass cpd here
	}, [cpw]);

	return (
		<>
			<section className="page-title">
				<div className="page-title__container app__container">
					<h1 className="page-title__heading">The CPW of your Garment</h1>
				</div>
			</section>

			<section className="upload">
				<div className="upload__container app__container">
					<h5 className="step-label p-medium">Step 1/3</h5>
					<h3 className="step-description">
						Upload an image of your item
					</h3>
					<div className="upload__container app__container">
						{/* <div className="upload__icons-container">
							<div className="upload__icon"></div>
						</div> */}

						<div className="upload__image"></div>
					</div>
				</div>
			</section>

			<section className="details">
				<div className="details__container app__container">
					<h5 className="step-label p-medium">Step 2/3</h5>
					<h3 className="step-description">Tell us about your item</h3>
					<div className="details__wrapper">
						<InputText label="Brand" />
						<InputSelect options={["S", "M", "L"]} label="Size" />
					</div>
					<InputTextArea label="Description" />
				</div>
				<div className="details__wrapper"></div>
			</section>

			<section className="calculator">
				<div className="calculator__container app__container">
					<h5 className="step-label p-medium">Step 3/3</h5>
					<h3 className="step-description">Tell us about your item</h3>
					<h3 className="step-description"></h3>
					<div className="calculator__wrapper">
						<InputSelect
							options={years}
							label="Year bought"
							value={year}
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
