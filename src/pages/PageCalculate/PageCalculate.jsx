import React from "react";
import "./PageCalculate.scss";

const PageCalculate = () => {
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
				</div>
			</div>
		</>
	);
};

export default PageCalculate;
