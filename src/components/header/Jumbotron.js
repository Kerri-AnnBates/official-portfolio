import React from 'react'
import { Container } from 'reactstrap';

const Jumbotron = () => {
	return (
		<div className="jumbo-intro">
			<Container fluid={true}>
				<div className="intro-wrapper">
					<div className="intro-content">
						<h1>Hello, I'm <span className="pop">Kerri-Ann Bates</span></h1>
						<h2>Full-Stack Developer</h2>
						<a href="#projects" className="full-btn">View Projects</a>
						<a href="#contact" className="clear-btn">Contact Me</a>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Jumbotron
