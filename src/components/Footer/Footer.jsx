import React from "react";
import "./Footer.scss";

import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";
import { ReactComponent as InboxIcon } from "../../assets/icons/inbox.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile.svg";

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div>
					<div className="footer__container app__container">
						<nav className="footer__nav">
							<div className="footer__nav-item">
								<div className="footer__nav-icon">
									<HomeIcon />
								</div>
								<h5 className="footer__nav-label">Home</h5>
							</div>
							<div className="footer__nav-item">
								<div className="footer__nav-icon">
									<SearchIcon />
								</div>
								<h5 className="footer__nav-label">Search</h5>
							</div>
							<div className="footer__nav-item">
								<div className="footer__nav-icon">
									<AddIcon />
								</div>
								<h5 className="footer__nav-label">Add</h5>
							</div>
							<div className="footer__nav-item">
								<div className="footer__nav-icon">
									<InboxIcon />
								</div>
								<h5 className="footer__nav-label">Inbox</h5>
							</div>
							<div className="footer__nav-item">
								<div className="footer__nav-icon">
									<ProfileIcon />
								</div>
								<h5 className="footer__nav-label">Profile</h5>
							</div>
						</nav>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
