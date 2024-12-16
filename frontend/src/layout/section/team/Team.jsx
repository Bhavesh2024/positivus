import React from "react";
import SectionIntro from "../../../components/sectionIntro/SectionIntro";
import TeamMemberCard from "../../../components/card/teamMember/TeamMemberCard";
import "./team.css";
const Team = () => {
	const teamMemberData = [
		{
			name: "John Smith",
			role: "CEO and Founder",
			about: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
			linkedin: "https://linkedin.com",
			image: "john-smith.svg",
		},
		{
			name: "Jane Doe",
			role: "Director of Operations",
			about: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
			linkedin: "https://linkedin.com",
			image: "jane-doe.svg",
		},
		{
			name: "Michael Brown",
			role: "Senior SEO Specialist",
			about: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
			linkedin: "https://linkedin.com",
			image: "michael-brown.svg",
		},
		{
			name: "Emily Johnson",
			role: "PPC Manager",
			about: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
			linkedin: "https://linkedin.com",
			image: "emily-johnson.svg",
		},
		{
			name: "Brian Williams",
			role: "Social Media Specialist",
			about: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
			linkedin: "https://linkedin.com",
			image: "brian-williams.svg",
		},
		{
			name: "Sarah Kim",
			role: "Content Creator",
			about: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
			linkedin: "https://linkedin.com",
			image: "sarah-kim.svg",
		},
	];
	return (
		<>
			<SectionIntro
				title="Team"
				content="Meet the skilled and experienced team behind our successful digital marketing strategies"
			/>
			<div className="team-member-container">
				{teamMemberData.map((member) => (
					<TeamMemberCard
						name={member.name}
						role={member.role}
						about={member.about}
						linkedin={member.linkedin}
						image={`../../../../images/team/${member.image}`}
					/>
				))}
			</div>
			<button className="see-all-btn bg-dark text-white">
				See all team
			</button>
		</>
	);
};

export default Team;
