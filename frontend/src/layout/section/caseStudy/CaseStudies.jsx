import React from "react";
import SectionIntro from "../../../components/sectionIntro/SectionIntro";
import "./case-studies.css";
import ArticleCard from "../../../components/card/article/ArticleCard";
const CaseStudies = () => {
	const articles = [
		"For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
		"For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
		"For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
	];
	return (
		<>
			<SectionIntro
				title="Case Studies"
				content="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
			/>
			<div className="case-studies-article-container bg-dark">
				{articles.map((content) => (
					<ArticleCard
						content={content}
						learnMoreClasses={"text-green"}
						cardClasses={"text-white"}
					/>
				))}
			</div>
		</>
	);
};

export default CaseStudies;
