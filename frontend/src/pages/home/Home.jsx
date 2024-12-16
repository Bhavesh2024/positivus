import React from "react";
import Header from "../../layout/header/main/Header";
import "./home.css";
import Service from "../../layout/section/service/Service";
import Footer from "../../layout/footer/Footer";
import ProposalSection from "../../layout/section/proposal/ProposalSection";
import CaseStudies from "../../layout/section/caseStudy/CaseStudies";
import ContactUs from "../../layout/section/contact/ContactUs";
import WorkProcess from "../../layout/section/workProcess/WorkProcess";
import Team from "../../layout/section/team/Team";
import Testimonials from "../../layout/section/testimonials/Testimonials";
const Home = () => {
	return (
		<>
			<div className="container">
				<Header />
				<Service />
				<ProposalSection />
				<CaseStudies />
				<WorkProcess />
				<Team />
				<Testimonials />
				<ContactUs />
				<Footer />
			</div>
		</>
	);
};

export default Home;
