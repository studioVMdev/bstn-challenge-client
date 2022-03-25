import React from "react";
import "./Footer.scss";

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="footer__container">
					<nav className="footer__nav">
						<ul className="footer__nav-list">
							<li className="footer__nav-item">
								<div className="footer__nav-icon">icon</div>
								<div className="div__footer-nav-label">label</div>
							</li>
							<li className="footer__nav-item">
								<div className="footer__nav-icon">icon</div>
								<div className="div__footer-nav-label">label</div>
							</li>
							<li className="footer__nav-item">
								<div className="footer__nav-icon">icon</div>
								<div className="div__footer-nav-label">label</div>
							</li>
							<li className="footer__nav-item">
								<div className="footer__nav-icon">icon</div>
								<div className="div__footer-nav-label">label</div>
							</li>
							<li className="footer__nav-item">
								<div className="footer__nav-icon">icon</div>
								<div className="div__footer-nav-label">label</div>
							</li>
						</ul>
					</nav>
				</div>
			</footer>
		</>
	);
};

export default Footer;
