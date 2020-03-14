import React from 'react'
import { Container } from 'reactstrap';

const TechDetails = () => {
	return (
		<>
			<div className="tech-stack">
				<Container fluid={true}>
					<h2>Tech Stack</h2>
					<div className="tech-flex">
						<div className="flex-item"><i className="fab fa-html5"></i><p>HTML</p></div>
						<div className="flex-item"><i className="fab fa-css3-alt"></i><p>CSS</p></div>
						<div className="flex-item"><i className="fab fa-sass"></i><p>Sass</p></div>
						<div className="flex-item"><i className="fab fa-react"></i><p>React</p></div>
						<div className="flex-item"><i className="fab fa-js"></i><p>JavaScript</p></div>
						<div className="flex-item"><i className="fab fa-node"></i><p>Node</p></div>
						<div className="flex-item"><i className="fab fa-node-js"></i><p>Express</p></div>
						<div className="flex-item"><i className="fab fa-python"></i><p>Python</p></div>
					</div>
				</Container>
			</div>
		</>
	)
}

export default TechDetails
