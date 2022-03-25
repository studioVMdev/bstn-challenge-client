import React from "react";
import "./InputNumber.scss";

const InputNumber = ({ name, label, value, handleOnChange }) => {
	return (
		<div className="input__wrapper">
			<label htmlFor={name} className="input__label h3">
				{" "}
				{label}
			</label>
			<input
				min={1}
				onChange={handleOnChange}
				className="input__field p-medium"
				type="number"
				name={name}
				label={label}
				placeholder={label}
				value={value}
			/>
		</div>
	);
};

export default InputNumber;
