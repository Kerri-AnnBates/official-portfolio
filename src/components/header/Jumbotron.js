import React from 'react'
import { Container } from 'reactstrap';
import { Link } from "react-scroll";

const Jumbotron = () => {
	return (
		<div className="jumbo-intro" id="intro">
			<Container fluid={true}>
				<div className="intro-wrapper">
					<div className="intro-content">
						<h1>Hello, I'm <span className="pop">Kerri-Ann Bates</span></h1>
						<h2>Full-Stack Developer</h2>
						<p>React | Redux | Express | Node</p>
						<Link
							activeClass="active"
							to="projects"
							smooth={true}
							offset={-80}
							spy={true}
							className="full-btn"
						>
							View Projects
						</Link>
						<Link
							activeClass="active"
							to="contact"
							smooth={true}
							offset={-80}
							spy={true}
							className="clear-btn"
						>
							Contact Me
						</Link>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Jumbotron
