import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const ProjectBlock = (props) => {
	const { projectTitle, subtitle, description, techStack, url, github, imageSource } = props;
	const [modalOpen, setModalOpen] = useState(false);

	const toggle = () => setModalOpen(!modalOpen);

	return (
		<>
			<div className="project-block">
				<div className="img-wrapper">
					<img src={imageSource} alt={`${projectTitle} website`} />
				</div>
				<div className="description">
					<h3>{projectTitle}</h3>
					<p>{subtitle}</p>
					<div>
						<span
							className="show-details"
							onClick={toggle}
						>More Details &#x0226B;</span>
						<ProjectModal
							toggle={toggle}
							techStack={techStack}
							description={description}
							modalOpen={modalOpen}
							projectTitle={projectTitle}
						/>
					</div>
				</div>
				<div className="links">
					{url && (<a href={url} target="_blank" rel="noopener noreferrer" title="Live Site"><FontAwesomeIcon icon={icon({ name: 'arrow-up-right-from-square' })} size="lg" className="icons" /></a>)}
					{github.map(link => (<a href={link} target="_blank" rel="noopener noreferrer" key={link} title="Github Repo"><FontAwesomeIcon icon={icon({ name: 'github', style: 'brands' })} size="lg" className="icons" /></a>))}
				</div>
			</div>
		</>
	)
}

export default ProjectBlock;