import React from 'react';
import { Container } from 'reactstrap';
import ProjectBlock from './ProjectBlock';

const Projects = () => {
	return (
		<section className="projects-list" id="projects">
			<Container>
				<div className="sub-titles"><h2>Projects</h2></div>
				<div className="projects-wrapper">
					<ProjectBlock />
				</div>
			</Container>
		</section>
	)
}

export default Projects
