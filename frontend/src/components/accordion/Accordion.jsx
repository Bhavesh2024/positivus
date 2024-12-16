import React, { useEffect, useRef, useState } from "react";
import "./accordion.css";
const Accordion = ({
	title,
	key,
	index,
	content,
	buttonClasses,
	containerClasses,
	collapse = false,
	processDataHandler,
}) => {
	const containerRef = useRef(0);
	const [isCollapsed, setIsCollapsed] = useState(collapse);
	const handleCollapse = (e) => {
		setIsCollapsed(!isCollapsed);
		processDataHandler((data) =>
			data.map((value, position) => {
				if (position == index) {
					value.collapse = true;
				} else {
					value.collapse = false;
				}
				return value;
			})
		);
	};

	useEffect(() => {
		containerRef.current.style = `background:${
			isCollapsed ? "var(--green)" : "var(--gray)"
		}`;
	}, [isCollapsed]);
	return (
		<>
			<div
				className={`accordion ${containerClasses}`}
				ref={containerRef}
				key={key}
			>
				<div className="summary-container">
					<div className="summary-info">
						<div className="accordion-index">{index}</div>
						<div className="accrodion-title">{title}</div>
					</div>
					<button
						className={`collapse-btn bg-white ${buttonClasses} ${
							isCollapsed ? "rotate" : "reverse-rotate"
						}`}
						onClick={handleCollapse}
					>
						{!isCollapsed ? (
							<i className="fa-solid fa-plus"></i>
						) : (
							<i className="fa-solid fa-minus"></i>
						)}
					</button>
				</div>
				{isCollapsed && (
					<div className="accordion-content">{content}</div>
				)}
			</div>
		</>
	);
};

export default Accordion;
