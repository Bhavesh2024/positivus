import React from "react";
import "./article-card.css";
const ArticleCard = ({
	content,
	cardClasses,
	learnMoreClasses,
	learnMoreAction,
}) => {
	return (
		<>
			<div className={`article-card ${cardClasses}`}>
				<p className="article-content">{content}</p>
				<button
					className={`learn-more-btn ${learnMoreClasses}`}
					onClick={learnMoreAction}
				>
					{" "}
					Learn More{" "}
					<i className="fa-solid fa-arrow-up learn-more-arrow"></i>
				</button>
			</div>
		</>
	);
};

export default ArticleCard;
