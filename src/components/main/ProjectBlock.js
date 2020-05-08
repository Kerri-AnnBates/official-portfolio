import React from 'react';
import randomQuote from '../../images/random-quote-machine.gif';
import alpacaVids from '../../images/alpacavids.gif';

const ProjectBlock = () => {
	return (
		<>
			<div className="project-block">
				<div className="img-wrapper">
					<img src={randomQuote} alt="Random Quote Website" />
				</div>
				<div className="description">
					<h3>Random Quote Machine</h3>
					<p>Simple React application using react class components, implementing an axios call to a third party API, and using Sass to style the frontend</p>
				</div>
				<div className="links"><a href="https://randomquotemachinekb.netlify.com/" target="_blank" rel="noopener noreferrer" >Live Demo</a> | <a href="https://github.com/Kerri-AnnBates/Random-Quote-Machine" target="_blank" rel="noopener noreferrer" >Github</a></div>
			</div>

			<div className="project-block">
				<div className="img-wrapper">
					<img src={alpacaVids} alt="Alpaca Vids website" />
				</div>
				<div className="description">
					<h3>Alpaca Vids</h3>
					<p>Web application that allows users to get constructive feedback on interview performance in a team envirnment.</p>
				</div>
				<div className="links">
					<a href="https://www.alpacavids.com/" target="_blank" rel="noopener noreferrer" >Live Demo</a> | <a href="https://github.com/Lambda-School-Labs/video-journal-for-teams-fe" target="_blank" rel="noopener noreferrer" >Github - FE</a> | <a href="https://github.com/Lambda-School-Labs/video-journal-for-teams-be" target="_blank" rel="noopener noreferrer" >Github - BE</a>
				</div>
			</div>

		</>
	)
}

export default ProjectBlock;
