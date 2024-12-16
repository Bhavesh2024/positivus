import React from "react";
import Navbar from "../navbar/Navbar";
import HeroSection from "../hero/HeroSection";
import "./header.css";
const Header = () => {
	return (
		<>
			<header className="header">
				<Navbar />
				<HeroSection />
			</header>
		</>
	);
};

export default Header;
