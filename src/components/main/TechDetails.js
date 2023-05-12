import React from 'react'
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const TechDetails = () => {
	return (
		<>
			<div className="tech-stack">
				<Container fluid={true}>
					<h2>Tech Stack</h2>
					<div className="tech-flex">
						<div className="flex-item"><FontAwesomeIcon icon={icon({ name: 'js', style: 'brands' })} size="4x" className="icons" /><p>Javascript</p></div>
						<div className="flex-item"><FontAwesomeIcon icon={icon({ name: 'sass', style: 'brands' })} size="4x" className="icons" /><p>Sass</p></div>
						<div className="flex-item"><FontAwesomeIcon icon={icon({ name: 'react', style: 'brands' })} size="4x" className="icons" /><p>React</p></div>
						<div className="flex-item"><FontAwesomeIcon icon={icon({ name: 'node', style: 'brands' })} size="4x" className="icons" /><p>Express</p></div>
						<div className="flex-item"><FontAwesomeIcon icon={icon({ name: 'java', style: 'brands' })} size="4x" className="icons" /><p>Java</p></div>
						<div className="flex-item"><FontAwesomeIcon icon={icon({ name: 'html5', style: 'brands' })} size="4x" className="icons" /><p>HTML</p></div>
					</div>
				</Container>
			</div>
		</>
	)
}

export default TechDetails
