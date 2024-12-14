import React from "react";
import Header from "../../layout/header/main/Header";
import "./home.css";
import Service from "../../layout/section/service/Service";
import Footer from "../../layout/footer/Footer";
const Home = () => {
	return (
		<>
			<div className="container">
				<Header />
				<Service />
				<Footer />
			</div>
		</>
	);
};

export default Home;
