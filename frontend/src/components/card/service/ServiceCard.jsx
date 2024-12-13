import React from "react";
import "./service-card.css";
const ServiceCard = ({
	title,
	image,
	cardClasses,
	titleClasses,
	imageClasses,
	arrowClasses,
}) => {
	return (
		<>
			<div className={`service-card ${cardClasses}`}>
				<div className="service-card-content">
					<h1 className={`service-title ${titleClasses}`}>{title}</h1>
					<button className="learn-more-btn" id="learnMoreBtn">
						<i
							className={`fa-solid fa-arrow-up learn-more-arrow ${arrowClasses}`}
						></i>{" "}
						<span
							className={`learn-more-btn-text ${
								cardClasses.includes("bg-dark")
									? "text-white"
									: "text-dark"
							}`}
						>
							Learn More
						</span>
					</button>
				</div>
				<div className="service-image-container">
					<img
						src={`../../../../images/services/${image}`}
						alt=""
						className={`service-image ${imageClasses}`}
					/>
				</div>
			</div>
		</>
	);
};

export default ServiceCard;
