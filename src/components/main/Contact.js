import React from 'react';
import { Container } from 'reactstrap';
import resume from '../../images/resume.pdf';

const Contact = () => {
	return (
		<>
			<Container>
				<div className="sub-titles"><h2>Connect With Me</h2></div>
				<p>Feel free to reach out with any questions.</p>
				<p>Check out my <a href={resume} target="_blank" className="resume" title="Resume">Resumé</a></p>
				<div className="connect-links">
					<a href="https://www.linkedin.com/in/kerri-ann-bates-0b4970129/" target="_blank" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
					<a href="mailto:bates.kerriann@gmail.com" title="Email"><i className="fas fa-envelope-square"></i></a>
					<a href="https://twitter.com/KerriAnnBates7" target="_blank" title="Twitter"><i className="fab fa-twitter-square"></i></a>
				</div>
			</Container>
		</>
	)
}

export default Contact;
