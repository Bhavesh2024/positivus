import React from "react";
import "./section.css";
const SectionIntro = ({
	titleBackground = "#B9FF66",
	title = "",
	content = "",
	classes = "",
}) => {
	const titleStyle = {
		backgroundColor: titleBackground,
		width: "fit-content",
		padding: "5px",
		borderRadius: "7px",
		letterSpacing: "1.5px",
		fontSize: "1.8rem",
	};
	return (
		<>
			<section className={`section-container ${classes}`}>
				<h1 className="section-title" style={titleStyle}>
					{title}
				</h1>
				<p className="section-content">{content}</p>
			</section>
		</>
	);
};

export default SectionIntro;
