import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const ProjectBlock = (props) => {
	const { projectTitle, subtitle, description, techStack, url, github, imageSource } = props;

	const [modalConfig, setModalConfig] = useState({
		isOpen: false,
		modalTitle: "",
		modalBody: ""
	});

	const toggle = (e, title, content) => {
		setModalConfig({
			isOpen: !modalConfig.isOpen,
			modalTitle: title,
			modalBody: content
		})
	}

	return (
		<>
			<div className="project-block">
				<div className="img-wrapper">
					<img src={imageSource} alt="Rock paper scissors website." />
				</div>
				<div className="description">
					<h3>{projectTitle}</h3>
					<p>{subtitle}</p>
					<div>
						<span
							className="show-details"
							onClick={(e) => toggle(e,
								"Rock, Paper, Scissors",
								(
									<>
										<p>{description}</p>
										<div className="tech-details">
											<h4>Tech Details</h4>
											<ul>
												{techStack.map(tech => (
													<li key={tech}>{tech}</li>
												))}
											</ul>
										</div>
									</>
								)
							)}
						>More Details &#x0226B;</span>
						<ProjectModal
							toggle={toggle}
							modalConfig={modalConfig}
						/>
					</div>
				</div>
				<div className="links">
					<a href={url} target="_blank" rel="noopener noreferrer" ><i className="fas fa-external-link-alt"></i></a> {github.map(link => (<a href={link} target="_blank" rel="noopener noreferrer" key={link} ><i className="fab fa-github-square"></i></a>))}
				</div>
			</div>
		</>
	)
}

export default ProjectBlock;
