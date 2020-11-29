import React from 'react';
import { Container } from 'reactstrap';
import ProjectBlock from './ProjectBlock';
import projects from '../../utils/data';

const Projects = () => {
	return (
		<section className="projects-list" id="projects">
			<Container>
				<div className="sub-titles"><h2>Projects</h2></div>
				<div className="projects-wrapper">
					{projects.map((project, idx) => (
						<ProjectBlock
							key={idx}
							projectTitle={project.title}
							subtitle={project.subTitle}
							description={project.description}
							techStack={project.techStack}
							url={project.url}
							github={project.github}
							imageSource={project.imageSource}
						/>
					))}
				</div>
			</Container>
		</section>
	)
}

export default Projects
