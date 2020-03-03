import React from 'react'
import { Container } from 'reactstrap';
import QuickInfoList from './QuickInfoList';

const About = () => {
	return (
		<main className="about">
			<Container fluid={true}>
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