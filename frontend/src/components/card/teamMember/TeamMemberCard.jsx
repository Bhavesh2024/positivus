import React from "react";
import "./team-card.css";
const TeamMemberCard = ({ name, image, about, role, linkedin }) => {
	return (
		<>
			<div className="team-member-card">
				<div className="member-profile">
					<div className="member-image-container">
						<img src={image} className="member-image" alt="" />
					</div>
					<div className="member-data">
						<div className="member-name">{name}</div>
						<div className="member-role">{role}</div>
					</div>
				</div>
				<div className="member-info">{about}</div>
				<i
					className="fa-brands fa-linkedin-in text-green bg-dark linkedinIcon"
					onClick={() => (window.location.href = `${linkedin}`)}
				></i>
			</div>
		</>
	);
};

export default TeamMemberCard;
