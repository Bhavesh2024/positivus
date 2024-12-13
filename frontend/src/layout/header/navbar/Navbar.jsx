import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
	const navMenuList = [
		{
			title: "About Us",
			redirect: "/about",
		},
		{
			title: "Services",
			redirect: "/service",
		},
		{
			title: "Use Cases",
			redirect: "/use-cases",
		},
		{
			title: "Pricing",
			redirect: "/prices",
		},
		{
			title: "Blog",
			redirect: "/blog",
		},
	];

	return (
		<>
			<div className="navbar">
				<div className="brand-logo">
					<img
						src="../../../../images/logo/logo-nav.svg"
						className="nav-logo"
					/>
				</div>
				<div className="nav-menu-container">
					<ul className="nav-menu-list">
						{navMenuList.map((item, index) => (
							<li className="nav-menu-list-item" key={`${index}`}>
								<Link
									to={item.redirect}
									className="nav-menu-link"
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
