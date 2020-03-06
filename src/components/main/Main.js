import React from 'react'
import { Container } from 'reactstrap';
import QuickInfoList from './QuickInfoList';
import TechDetails from './TechDetails';
import About from './About';

const Main = () => {
	return (
		<main>
			<div className="about-section">
				<div className="bar"></div>
				<Container fluid={true}>
					<div className="sub-titles"><h2>About</h2></div>
					<QuickInfoList />
				</Container>
			</div>

			<div className="detailed-info">
				<TechDetails />
				<About />
			</div>
		</main>
	)
}

export default Main