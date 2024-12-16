import React, { useState } from "react";
import "./footer.css";
import "../header/navbar/navbar.css";
import { navMenuList } from "../../utils/navMenuList";
import { Link } from "react-router-dom";
const Footer = () => {
	const contactInfo = {
		Email: "info@positivus.com",
		Phone: "555-567-8901",
		Address: "1234 Main St Moonstone City, Stardust State 12345",
	};

	const [btnText, setBtnText] = useState("Subscribe to news");
	window.onresize = (e) => {
		matchMedia("(max-width:768px)").matches
			? setBtnText("Subscribe")
			: setBtnText("Subscribe to news");
	};
	return (
		<>
			<footer className="footer">
				<div className="footer-nav">
					<div className="footer-logo">
						<img
							src="../../../../images/logo/logo-footer.svg"
							alt=""
						/>
					</div>
					<div className="menu-list-container">
						<ul className="menu-list">
							{navMenuList.map((value) => (
								<li className="menu-list-item">
									<Link
										to={value.redirect}
										className="menu-list-link"
									>
										{value.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="social-icons-container">
						<i class="fa-brands fa-linkedin-in social-icon"></i>
						<i className="fa-brands fa-facebook-f social-icon"></i>
						<i className="fa-brands fa-twitter social-icon"></i>
					</div>
				</div>
				<div className="contact-us-container">
					<div className="contact-info-content">
						<span className="bg-green text-dark contact-title">
							Contact us:{" "}
						</span>
						{Object.entries(contactInfo).map(([key, value]) => (
							<div className="info">
								{key}:{value}
							</div>
						))}
					</div>
					<form className="news-letter-form bg-dark">
						<input
							type="text"
							id="email"
							name="email"
							placeholder="Email"
							className="news-letter-email bg-dark text-gray"
							required
						/>
						<button
							className="subscribe-btn bg-green"
							id="subscribeBtn"
						>
							{btnText}
						</button>
					</form>
				</div>
				<div className="copyright-content">
					<span>© 2023 Positivus. All Rights Reserved.</span>{" "}
					<Link to="/" className="text-white">
						Privacy Policy
					</Link>
				</div>
			</footer>
		</>
	);
};

export default Footer;
