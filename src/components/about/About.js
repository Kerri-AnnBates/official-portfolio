import React from 'react'
import { Container } from 'reactstrap';
import QuickInfoList from './QuickInfoList';

const About = () => {
	return (
		<main className="about-section">
			<div className="bar"></div>
			<Container fluid={true}>
				<div className="sub-titles">
					<h2>About</h2>
				</div>
				<QuickInfoList />
				<div className="detailed-info">
					{/* Tech stack */}
					{/* About me */}
				</div>
			</Container>
		</main>
	)
}

export default About