import React from "react";
import "./proposal.css";
const ProposalSection = () => {
	return (
		<>
			<div className="bg-gray proposal-sec">
				<div className="proposal-content">
					<h1 className="proposal-title">Let’s make things happen</h1>
					<p className="proposal-text">
						Contact us today to learn more about how our digital
						marketing services can help your business grow and
						succeed online.
					</p>
					<button className="bg-dark text-white proposal-btn">
						Get your free proposal
					</button>
				</div>
				<div className="proposal-image-container">
					<img
						src="../../../../images/illustrate/proposal-sec.svg"
						className="proposal-image"
						alt=""
					/>
				</div>
			</div>
		</>
	);
};

export default ProposalSection;
