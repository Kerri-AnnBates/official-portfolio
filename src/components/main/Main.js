import React from 'react'
import { Container } from 'reactstrap';
import QuickInfoList from './QuickInfoList';
import TechDetails from './TechDetails';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Main = () => {
	return (
		<main>
			<section className="about-section" id="about">
				<div className="bar"></div>
				<Container fluid={true}>
					<div className="sub-titles"><h2>About</h2></div>
					<QuickInfoList />
				</Container>
			</section>

			<section className="detailed-info">
				<TechDetails />
				<About />
			</section>

			<section className="projects-list" id="projects">
				<Projects />
			</section>

			<section id="contact" className="contact-details">
				<Contact />
			</section>
		</main>
	)
}

export default Main