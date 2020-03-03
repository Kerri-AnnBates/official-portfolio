import React from 'react'
import { Container } from 'reactstrap';
import QuickInfoList from './QuickInfoList';

const About = () => {
	return (
		<main className="about">
			<Container fluid={true}>
				<h2 className="sub-titles">About</h2>
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