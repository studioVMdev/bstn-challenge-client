import React from "react";
import { useState } from "react";
import "./PageCalculate.scss";

import InputTextArea from "../../components/inputs/InputTextArea/InputTextArea";
import InputSelect from "../../components/inputs/InputSelect/InputSelect";
import InputNumber from "../../components/inputs/InputNumber/InputNumber";

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

	return (
		<>
			<div className="page-title">
				<div className="page-title__container">
					<h1 className="page-title__heading">The CPW of your Garment</h1>
				</div>
			</div>

			<div className="upload">
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
			</div>

			<div className="calculator">
				<div className="calculator__container">
					<div className="calculator__year">
						<div className="calculator__wrapper-top">
							<InputSelect
								options={years}
								label="Year Bought"
								handleOnChange={handleOnYearChange}
							/>

							<InputNumber
								label="Wears p/month"
								value={wears}
								handleOnChange={handleWearsOnChange}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PageCalculate;
