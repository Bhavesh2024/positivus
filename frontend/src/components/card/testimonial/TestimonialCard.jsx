import React from "react";
import "./testimonial-card.css";

const TestimonialCard = ({ name, role, content, active, cardRef }) => {
	return (
		<>
			<div className="testmonial-card" ref={cardRef}>
				<div className="message-box">" {content} "</div>
				<div className="testimonial-info">
					<span className="member-name text-green">{name}</span>
					<span className="member-role">{role}</span>
				</div>
			</div>
		</>
	);
};

export default TestimonialCard;
