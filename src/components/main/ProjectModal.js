import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ProjectModal = (props) => {
	const { toggle, projectTitle, description, techStack, modalOpen } = props;

	return (
		<div>
			<Modal isOpen={modalOpen} toggle={toggle}>
				<ModalHeader toggle={toggle}>{projectTitle} Description</ModalHeader>
				<ModalBody>
					<p>{description}</p>
					<div className="tech-details">
						<h4>Tech Details</h4>
						<ul>
							{techStack.map(tech => (
								<li key={tech}>{tech}</li>
							))}
						</ul>
					</div>
				</ModalBody>
				<ModalFooter>
					<Button color="secondary" onClick={toggle}>Close</Button>
				</ModalFooter>
			</Modal>
		</div>
	)
}

export default ProjectModal
