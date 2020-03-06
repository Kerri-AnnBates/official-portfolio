import React from 'react';
import { Container } from 'reactstrap';
import ProjectBlock from './ProjectBlock';

const Projects = () => {
	return (
		<>
			<Container>
				<div className="sub-titles"><h2>Projects</h2></div>
				<div className="projects-wrapper">
					<ProjectBlock />
				</div>
			</Container>
		</>
	)
}

export default Projects
