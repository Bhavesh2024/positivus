import React, { useRef, useEffect } from "react";
import "./hero.css";
const HeroSection = () => {
	const brands = [
		"amazon",
		"dribble",
		"hubspot",
		"notion",
		"netflix",
		"zoom",
	];
	const headlineRef = useRef(null);
	const heroContainerRef = useRef(null);

	useEffect(() => {
		const handleResize = () => {
			if (window.matchMedia("(max-width:500px)").matches) {
				console.log("Appending child...");
				if (heroContainerRef.current && headlineRef.current) {
					heroContainerRef.current.appendChild(headlineRef.current);
				}
			}
		};

		// Run once initially
		handleResize();

		// Add resize event listener
		window.addEventListener("resize", handleResize);

		// Cleanup event listener on unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<section className="hero-container" ref={heroContainerRef}>
				<div className="hero-content">
					<h1 className="hero-content-headline" ref={headlineRef}>
						Navigating the digital landscape for success
					</h1>
					<p className="hero-content-intro">
						Our digital marketing agency helps businesses grow and
						succeed online through a range of services including
						SEO, PPC, social media marketing, and content creation.
					</p>
					<button
						className="book-consultation-btn"
						id="bookConsultationBtn"
					>
						Book a consultation
					</button>
				</div>
				<div className="hero-illustrate-container">
					<img
						src="../../../../images/illustrate/hero-illustrate.svg"
						className="hero-illustrate"
					/>
				</div>
			</section>
			<div className="brands-container">
				{brands.map((item) => (
					<img
						src={`../../../../images/brands/${item}.svg`}
						className="brand-image"
					/>
				))}
			</div>
		</>
	);
};

export default HeroSection;
