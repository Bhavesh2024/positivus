import React from "react";
import SectionIntro from "../../../components/sectionIntro/SectionIntro";
import "./contact-us.css";
const ContactUs = () => {
	return (
		<>
			<SectionIntro
				title="Contact Us"
				content="Connect with Us: Let's Discuss Your Digital Marketing Needs"
			/>
			<div className="contact-form-container bg-gray">
				<form action="" className="contact-form">
					<div className="form-radio-group">
						<div className="form-radio">
							<input
								type="radio"
								name="contact-type"
								value={"contact"}
								required
							/>
							<label htmlFor="">Say Hi</label>
						</div>
						<div className="form-radio">
							<input
								type="radio"
								name="contact-type"
								value={"business"}
								required
							/>
							<label htmlFor="">Get a Quote</label>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="#name" className="form-label">
							Name
						</label>
						<input
							type="text"
							id="name"
							placeholder="Name"
							className="form-input"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="#email" className="form-label">
							Email*
						</label>
						<input
							type="email"
							id="email"
							placeholder="Email"
							className="form-input"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="#message">Message*</label>
						<textarea
							id="message"
							rows={7}
							cols={10}
							placeholder="Message"
							className="form-input"
						></textarea>
					</div>
					<div>
						<button
							type="submit"
							name="submit"
							value={"submit"}
							className="bg-dark text-white submit-btn"
							id="submitBtn"
						>
							Send Message
						</button>
					</div>
				</form>
				<div className="contact-illustrate-container">
					<img
						src="../../../../images/illustrate/contact-illustrate.svg"
						alt=""
						className="contact-illustrate"
					/>
				</div>
			</div>
		</>
	);
};

export default ContactUs;
