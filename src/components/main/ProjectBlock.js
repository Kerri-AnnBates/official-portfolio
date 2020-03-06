import React from 'react';
import randomQuote from '../../images/random-quote-machine.gif';

const ProjectBlock = () => {
	return (
		<div className="project-block">
			<div className="img-wrapper">
				<img src={randomQuote} />
			</div>
			<div className="description">
				<h3>Random Quote Machine</h3>
				<p>Simple React application using react class components, implementing an axios call to a third party API, and using Sass to style the frontend</p>
				<div><a href="https://randomquotemachinekb.netlify.com/" target="_blank">Live Demo</a> | <a href="https://github.com/Kerri-AnnBates/Random-Quote-Machine" target="_blank">Github</a></div>
			</div>
		</div>
	)
}

export default ProjectBlock;
