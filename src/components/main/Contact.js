import React from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const Contact = () => {
	return (
		<section id="contact" className="contact-details">
			<Container>
				<div className="sub-titles"><h2>Connect With Me</h2></div>
				<p>Feel free to reach out with any questions.</p>
				<div className="connect-links">
					<a href="https://www.linkedin.com/in/kerri-ann-bates/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FontAwesomeIcon icon={icon({ name: 'linkedin', style: 'brands' })} size="2x" className="icons" /></a>
					<a href="https://twitter.com/KerriAnnBates7" target="_blank" rel="noopener noreferrer" title="Twitter"><FontAwesomeIcon icon={icon({ name: 'twitter', style: 'brands' })} size="2x" className="icons" /></a>
					<a href="https://github.com/Kerri-AnnBates" target="_blank" rel="noopener noreferrer" title="Github"><FontAwesomeIcon icon={icon({ name: 'github', style: 'brands' })} size="2x" className="icons" /></a>
				</div>
			</Container>
		</section>
	)
}

export default Contact;
