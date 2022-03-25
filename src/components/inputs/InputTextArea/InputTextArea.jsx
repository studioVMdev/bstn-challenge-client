import React from "react";
import "./InputTextArea.scss";

const InputTextArea = ({ name, label, value, type, handleOnChange }) => {
	return (
		<div className="input__wrapper">
			<label htmlFor={name} className="input__label h3">
				{" "}
				{label}
			</label>
			<textarea
				onChange={handleOnChange}
				className="input__field  p-medium input__text-area "
				type="text"
				name={name}
				label={label}
				rows="4"
				placeholder={label}
				value={value}
			></textarea>
		</div>
	);
};

export default InputTextArea;
