import React from "react";
import Header from "../../layout/header/main/Header";
import "./home.css";
import Service from "../../layout/section/service/Service";
const Home = () => {
	return (
		<>
			<div className="container">
				<Header />
				<Service />
			</div>
		</>
	);
};

export default Home;
