import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { navMenuList } from "../../../utils/navMenuList";
const Navbar = () => {
	const [open, setOpen] = useState(false);
	const listRef = useRef(0);
	const btnRef = useRef(0);
	const handleDrawer = (e) => {
		setOpen(!open);
	};

	useEffect(() => {
		if (matchMedia("(max-width:576px)").matches) {
			btnRef.current.style = `display:${open ? "block" : "none"}`;
			listRef.current.style = `display:${
				open ? "flex" : "none"
			};flex-direction:column`;
		}
	}, [open]);
	return (
		<>
			<div className="navbar">
				<div className="brand-logo">
					<img
						src="../../../../images/logo/logo-nav.svg"
						className="nav-logo"
					/>
					<i
						className="fa-solid fa-bars menubar"
						onClick={handleDrawer}
					></i>
				</div>
				<div className="menu-list-container">
					<ul className="menu-list" ref={listRef}>
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
					<button
						className="request-quote-btn"
						id="requestQuoteBtn"
						ref={btnRef}
					>
						Request a quote
					</button>
				</div>
			</div>
		</>
	);
};

export default Navbar;
