import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";

const RouteConfig = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* Pending to Implement */}
				<Route path="/about" element={<>About Us</>} />
				<Route path="/service" element={<>Services</>} />
				<Route path="/use-cases" element={<>Use Cases</>} />
				<Route path="/prices" element={<>Pricing</>} />
				<Route path="/blog" element={<>Blog</>} />
				{/*-----------------------------*/}
			</Routes>
		</>
	);
};

export default RouteConfig;
