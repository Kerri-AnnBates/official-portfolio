import React from 'react';
import { Container } from 'reactstrap';
import resume from '../../images/resume.pdf';

const Contact = () => {
	return (
		<>
			<Container>
				<div className="sub-titles"><h2>Connect With Me</h2></div>
				<p>Feel free to reach out with any questions.</p>
				<p>Check out my <a href={resume} target="_blank" rel="noopener noreferrer" className="resume" title="Resume">Resumé</a></p>
				<div className="connect-links">
					<a href="https://www.linkedin.com/in/kerri-ann-bates/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
					<a href="mailto:bates.kerriann@gmail.com" title="Email" target="_blank" rel="noopener noreferrer" ><i className="fas fa-envelope-square"></i></a>
					<a href="https://twitter.com/KerriAnnBates7" target="_blank" rel="noopener noreferrer" title="Twitter"><i className="fab fa-twitter-square"></i></a>
					<a href="https://github.com/Kerri-AnnBates" target="_blank" rel="noopener noreferrer" title="Github"><i className="fab fa-github-square"></i></a>
				</div>
			</Container>
		</>
	)
}

export default Contact;
