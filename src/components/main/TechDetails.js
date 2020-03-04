import React from 'react'
import { Container } from 'reactstrap';

const TechDetails = () => {
	return (
		<>
			<div className="tech-stack">
				<Container fluid={true}>
					<h2>Technology Stack</h2>
					<div className="tech-flex">
						<div className="flex-item"><i class="fab fa-html5"></i></div>
						<div className="flex-item"><i class="fab fa-css3-alt"></i></div>
						<div className="flex-item"><i class="fab fa-sass"></i></div>
						<div className="flex-item"><i class="fab fa-react"></i></div>
						<div className="flex-item"><i class="fab fa-js"></i></div>
						<div className="flex-item"><i class="fab fa-node"></i></div>
						<div className="flex-item"><i class="fab fa-node-js"></i></div>
						<div className="flex-item"><i class="fab fa-python"></i></div>
					</div>
				</Container>
			</div>
		</>
	)
}

export default TechDetails
