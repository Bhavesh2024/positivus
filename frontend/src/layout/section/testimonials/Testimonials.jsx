import React, { useEffect, useRef, useState } from "react";
import "./testimonial.css";
import SectionIntro from "../../../components/sectionIntro/SectionIntro";
// import { data } from "react-router-dom";
import TestimonialCard from "../../../components/card/testimonial/TestimonialCard";
const Testimonials = () => {
	const testimonialData = [
		{
			name: "John Smith1",
			role: "Marketing Director at XYZ Corp",
			content:
				"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
		},
		{
			name: "John Smith2",
			role: "Marketing Director at XYZ Corp",
			content:
				"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
		},
		{
			name: "John Smith3",
			role: "Marketing Director at XYZ Corp",
			content:
				"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
		},
		{
			name: "John Smith4",
			role: "Marketing Director at XYZ Corp",
			content:
				"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
		},
		{
			name: "John Smith5",
			role: "Marketing Director at XYZ Corp",
			content:
				"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
		},
	];

	const [isActive, setIsActive] = useState(0);
	const prevBtnRef = useRef(0);
	const nextBtnRef = useRef(0);
	const testiMonialRef = useRef(0);
	const handlePrev = () => {
		const nextActive = Math.max(isActive - 1, 0);
		setIsActive(nextActive);
		updateSlide(nextActive);
	};

	const handleNext = () => {
		const nextActive = Math.min(isActive + 1, testimonialData.length - 1);
		setIsActive(nextActive);
		updateSlide(nextActive);
	};

	const updateSlide = (index) => {
		let translateValue;

		if (window.matchMedia("(max-width: 576px)").matches) {
			translateValue = -index * 100;
		} else {
			translateValue = -index * 30;
		}

		testiMonialRef.current.style.transition = "all 0.4s ease";
		testiMonialRef.current.style.transform = `translateX(${translateValue}%)`;
	};

	useEffect(() => {
		if (isActive == 0) {
			prevBtnRef.current.classList.add("disable");
			nextBtnRef.current.classList.remove("disable");
		}
		if (isActive == testimonialData.length - 1) {
			nextBtnRef.current.classList.add("disable");
		}
		if (isActive > 0) {
			prevBtnRef.current.classList.remove("disable");
		}
	}, [isActive]);
	return (
		<>
			<SectionIntro
				title="Testimonials"
				content="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
			/>
			<section className="testimonial">
				<div className="slider-container">
					<div className="testimonial-container" ref={testiMonialRef}>
						{testimonialData.map((data, key) => (
							<TestimonialCard
								name={data.name}
								role={data.role}
								content={data.content}
								key={`${key}`}
								active={isActive == key}
							/>
						))}
					</div>
				</div>

				<div className="slider-control">
					<button
						className="swipe-prev-btn"
						id="swipePrevBtn"
						onClick={handlePrev}
						ref={prevBtnRef}
					>
						<i className="fa-solid fa-arrow-left"></i>
					</button>
					{testimonialData.map((value, index) => (
						<>
							{isActive == index ? (
								<i className="star bg-green"></i>
							) : (
								<i className="star bg-white"></i>
							)}
						</>
					))}
					<button
						className="swipe-next-btn"
						id="swipeNextBtn"
						onClick={handleNext}
						ref={nextBtnRef}
					>
						<i className="fa-solid fa-arrow-right"></i>
					</button>
				</div>
			</section>
		</>
	);
};

export default Testimonials;
