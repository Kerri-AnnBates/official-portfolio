import React from 'react'
import { Container } from 'reactstrap';
import profilePic from '../../images/profile-pic.jpg';

const About = () => {
	return (
		<>
			<div className="about-detail">
				<Container fluid={true}>
					<h2>About Me</h2>
					<div className="img-wrapper">
						<img src={profilePic} alt="Profile picture of Kerri-Ann Bates" />
					</div>
					<div className="description">
						<p>I'm a full-stack developer with a passion for creating dynamic websites.
							I enjoy working on teams, growing my skill set, and sharing my knowledge with others.</p>
					</div>
				</Container>
			</div>
		</>
	)
}

export default About
