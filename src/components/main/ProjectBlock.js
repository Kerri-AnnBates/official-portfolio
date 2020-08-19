import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import randomQuote from '../../images/random-quote-machine.gif';
import alpacaVids from '../../images/alpacavids.gif';
import recipegif from '../../images/recipe.gif';
import weatherApp from '../../images/weatherApp.png';
import rockPaperScissors from '../../images/rock-paper-scissors.png';

const ProjectBlock = () => {
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
					<img src={rockPaperScissors} alt="Rock paper scissors website." />
				</div>
				<div className="description">
					<h3>Rock, Paper, Scissors</h3>
					<p>A rock, paper, scissors game played against the computer. First to five win. Check it out!</p>
					<div>
						<span
							className="show-details"
							onClick={(e) => toggle(e,
								"Rock, Paper, Scissors",
								(
									<>
										<p>My first game ever built. I built this game to hone my javascript skills. This website is built with HTML, CSS, and vanilla Javascript. It was very exciting seeing everything come together.</p>
										<div className="tech-details">
											<h4>Tech Details</h4>
											<ul>
												<li>HTML</li>
												<li>LESS</li>
												<li>Javascript (ES6)</li>
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
					<a href="https://kbs-rock-paper-scissors.netlify.app/" target="_blank" rel="noopener noreferrer" >Live Demo</a> | <a href="https://github.com/Kerri-AnnBates/rock-paper-scissors" target="_blank" rel="noopener noreferrer" >Github</a>
				</div>
			</div>

			<div className="project-block">
				<div className="img-wrapper">
					<img src={randomQuote} alt="Random Quote Website" />
				</div>
				<div className="description">
					<h3>Random Quote Machine</h3>
					<p>Simple website that displays randomly generated quotes to the user.</p>
					<div>
						<span
							className="show-details"
							onClick={(e) => toggle(e,
								"Random Qoute Machine",
								(
									<>
										<p>This simple application took approximately less than a day to complete. It demonstrates the use of react class components, connection to a thrid party API, and Sass.</p>

										<div className="tech-details">
											<h4>Tech Details</h4>
											<ul>
												<li>React class components</li>
												<li>Axios HTTP client</li>
												<li>Preprocessor scripting language - Sass</li>
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
					<a href="https://randomquotemachinekb.netlify.com/" target="_blank" rel="noopener noreferrer" >Live Demo</a> | <a href="https://github.com/Kerri-AnnBates/Random-Quote-Machine" target="_blank" rel="noopener noreferrer" >Github</a>
				</div>
			</div>

			<div className="project-block">
				<div className="img-wrapper">
					<img src={alpacaVids} alt="Alpaca Vids website" />
				</div>
				<div className="description">
					<h3>Alpaca Vids</h3>
					<p>Web application that allows users to get constructive feedback on interview performance in a team envirnment.</p>
					<div>
						<span
							className="show-details"
							onClick={(e) => toggle(e,
								"Alpaca Vids",
								(
									<>
										<p>A video journal web application that allow users to practice answering prompt questions by recording themselves answering those questions and receiving feedback from their team members on one platform. Worked with a remote team of 4 full-stack developers and 1 UX designer over 2 months.</p>
										<div className="tech-details">
											<h4>Tech Details</h4>
											<ul>
												<li>Functioned as a full-stack developer</li>
												<li>Created several API endpoints, a protective middleware, and tests for those endpoints on the backend using jest, node, express and knex</li>
												<li>Worked with Postgres relational database</li>
												<li>Created responsive base layout with Sass</li>
												<li>Created actions in redux, dispatching data from endpoints to display on the frontend</li>
												<li>Implemented CRUD operations</li>
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
					<a href="https://www.alpacavids.com/" target="_blank" rel="noopener noreferrer" >Live Demo</a> | <a href="https://github.com/Lambda-School-Labs/video-journal-for-teams-fe" target="_blank" rel="noopener noreferrer" >Github - FE</a> | <a href="https://github.com/Lambda-School-Labs/video-journal-for-teams-be" target="_blank" rel="noopener noreferrer" >Github - BE</a>
				</div>
			</div>

			<div className="project-block">
				<div className="img-wrapper">
					<img src={weatherApp} alt="Weather web application." />
				</div>
				<div className="description">
					<h3>Weather App</h3>
					<p>Web application that display the weather in your local area and other cities throughtout the US via search.</p>
					<div>
						<span
							className="show-details"
							onClick={(e) => toggle(e,
								"Weather App",
								(
									<>
										<p>Web application that display the weather in your local area. It also gives the user the ability to search and retrieve weather data from other cities throughout the USA, as well as save their favorite city. This app demonstrates the use of react functional components, react hooks, connection to a thrid party API, saving data, Sass and the BEM styling methodology. Future features in the making...</p>

										<div className="tech-details">
											<h4>Tech Details</h4>
											<ul>
												<li>React functional components</li>
												<li>React hooks</li>
												<li>Axios HTTP client</li>
												<li>Preprocessor scripting language - Sass</li>
												<li>Mobile-first style approach</li>
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
					<a href="https://theweatherapp-kb.herokuapp.com/" target="_blank" rel="noopener noreferrer" >Live Demo</a> | <a href="https://github.com/Kerri-AnnBates/weather-app" target="_blank" rel="noopener noreferrer" >Github</a>
				</div>
			</div>

			<div className="project-block">
				<div className="img-wrapper">
					<img src={recipegif} alt="Recipe web appliacation" />
				</div>
				<div className="description">
					<h3>Recipe App</h3>
					<p>Web application that allows users to manage their favorite recipes on one platform. (Work in progress)</p>
					<div>
						<span
							className="show-details"
							onClick={(e) => toggle(e,
								"Recipe App",
								(
									<>
										<p>Currently in progress, this application offer users the ability to manage their recipes on one platform. To avoid cluttering their bookmarks with saved recipes.</p>
										<div className="tech-details">
											<h4>Tech Details</h4>
											<ul>
												<li>Created several API endpoints, a protective middleware, using node, express and knex</li>
												<li>Used Formik, and Yup to manage form validations</li>
												<li>Created responsive styles and base layout with Sass</li>
												<li>Used ReactStrap where needed</li>
												<li>Created actions in redux, dispatching data from endpoints to display on the frontend</li>
												<li>Implemented CRUD operations</li>
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
					<a href="https://github.com/recipe-app-kb/recipe-fe" target="_blank" rel="noopener noreferrer" >Github - FE</a> | <a href="https://github.com/recipe-app-kb/recipe-be" target="_blank" rel="noopener noreferrer" >Github - BE</a>
				</div>
			</div>

		</>
	)
}

export default ProjectBlock;
