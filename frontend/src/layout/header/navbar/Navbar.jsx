import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { navMenuList } from "../../../utils/navMenuList";
const Navbar = () => {
	return (
		<>
			<div className="navbar">
				<div className="brand-logo">
					<img
						src="../../../../images/logo/logo-nav.svg"
						className="nav-logo"
					/>
				</div>
				<div className="menu-list-container">
					<ul className="menu-list">
						{navMenuList.map((item, index) => (
							<li className="menu-list-item" key={`${index}`}>
								<Link
									to={item.redirect}
									className="menu-list-link"
								>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
					<button className="request-quote-btn" id="requestQuoteBtn">
						Request a quote
					</button>
					<i className="fa-solid fa-bars menubar"></i>
				</div>
			</div>
		</>
	);
};

export default Navbar;
