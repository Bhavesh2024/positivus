import React, { useState } from "react";
import SectionIntro from "../../../components/sectionIntro/SectionIntro";
import Accordion from "../../../components/accordion/Accordion";
import "./process.css";
const WorkProcess = () => {
	const [workProcessContent, setWorkProcessContent] = useState([
		{
			name: "Consultation",
			content:
				"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
			collapse: false,
		},
		{
			name: "Research",
			content:
				"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
			collapse: false,
		},
		{
			name: "Implementation",
			content:
				"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
			collapse: false,
		},
		{
			name: "Optimization",
			content:
				"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
			collapse: false,
		},
		{
			name: "Reporting",
			content:
				"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
			collapse: false,
		},
		{
			name: "Improvement",
			content:
				"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
			collapse: false,
		},
	]);
	return (
		<>
			<SectionIntro
				title="Our Working Process"
				content="Step-by-Step Guide to Achieving Your Business Goals"
			/>
			<div className="process-container">
				{workProcessContent.map((data, key) => (
					<Accordion
						title={data.name}
						content={data.content}
						containerClasses={"bg-gray"}
						index={key < 9 ? `0${key + 1}` : key + 1}
						key={key}
						collapse={data.collapse}
						processDataHandler={setWorkProcessContent}
					/>
				))}
			</div>
		</>
	);
};

export default WorkProcess;
