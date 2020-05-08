import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ProjectModal = (props) => {
	const { toggle, modalConfig, className } = props;

	return (
		<div>
			<Modal isOpen={modalConfig.isOpen} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle}>{modalConfig.modalTitle}</ModalHeader>
				<ModalBody>{modalConfig.modalBody}</ModalBody>
				<ModalFooter>
					<Button color="secondary" onClick={toggle}>Cancel</Button>
				</ModalFooter>
			</Modal>
		</div>
	)
}

export default ProjectModal
