import React from 'react';
import randomQuote from '../../images/random-quote-machine.gif';

const ProjectBlock = () => {
	return (
		<div className="project-block">
			<div className="img-wrapper">
				<img src={randomQuote} />
			</div>
			<div className="description">
				<h3>Project Title</h3>
				<p>Brief description of app</p>
				<div><a href="#">Live Demo</a> | <a href="#">Github</a></div>
			</div>
		</div>
	)
}

export default ProjectBlock;
