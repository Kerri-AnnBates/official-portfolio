import React from 'react';
import { Container } from 'reactstrap';

const Contact = () => {
	return (
		<>
			<Container>
				<div className="sub-titles"><h2>Connect With Me</h2></div>
				<p>Feel free to reach out with any questions. I'm interested in full-stack web development positions.</p>
				<a href="#" className="resume">Resume</a>
				<div className="connect-links">
					<a href="https://www.linkedin.com/in/kerri-ann-bates-0b4970129/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
					<a href="mailto:bates.kerriann@gmail.com" title="Email"><i class="fas fa-envelope-square"></i></a>
					<a href="https://twitter.com/KerriAnnBates7" target="_blank" title="Twitter"><i class="fab fa-twitter-square"></i></a>
				</div>
			</Container>
		</>
	)
}

export default Contact;
