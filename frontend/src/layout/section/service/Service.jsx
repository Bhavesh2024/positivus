import React from "react";
import "./service.css";
import SectionIntro from "../../../components/sectionIntro/SectionIntro";
import ServiceCard from "../../../components/card/service/ServiceCard";
const Service = () => {
	const serviceSection = {
		title: "Services",
		content:
			"At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:",
	};

	const serviceCards = [
		{
			title: "Search Engine Optimisation",
			image: "seo.svg",
			titleClasses: "bg-green",
			imageClasses: "",
			cardClasses: "bg-gray",
			arrowClasses: "bg-dark text-green",
		},
		{
			title: "Pay-per-click advertising",
			image: "advertise.svg",
			titleClasses: "bg-white",
			imageClasses: "",
			cardClasses: "bg-green",
			arrowClasses: "bg-dark text-green",
		},
		{
			title: "Social Media Marketing",
			image: "social-media-marketing.svg",
			titleClasses: "bg-white",
			imageClasses: "",
			cardClasses: "bg-dark",
			arrowClasses: "bg-white text-dark",
		},
		{
			title: "Email Marketing",
			image: "email-marketing.svg",
			titleClasses: "bg-green",
			imageClasses: "",
			cardClasses: "bg-gray",
			arrowClasses: "bg-dark text-green",
		},
		{
			title: "Content Creation",
			image: "content-creation.svg",
			titleClasses: "bg-white",
			imageClasses: "",
			cardClasses: "bg-green",
			arrowClasses: "bg-dark text-green",
		},
		{
			title: "Analytics and Tracking",
			image: "analytics.svg",
			titleClasses: "bg-green",
			imageClasses: "",
			cardClasses: "bg-dark",
			arrowClasses: "bg-white",
		},
	];
	return (
		<>
			<section className="service">
				<SectionIntro
					title={serviceSection.title}
					content={serviceSection.content}
				/>
				<div className="service-card-container">
					{serviceCards.map((item) => (
						<ServiceCard {...item} />
					))}
				</div>
			</section>
		</>
	);
};

export default Service;
