import React from 'react'
import { Container } from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
	return (
		<div className="nav-bar">
			<Container fluid={true}>
				<div className="nav-wrapper">
					<div className="logo">
						<div><i className="fas fa-laptop-code"></i></div>
					</div>
					<nav>
						<ul>
							<li>
								<Link
									to="intro"
									smooth={true}
									offset={-80}
									className="active"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to="about"
									smooth={true}
									offset={-80}
								>
									About
								</Link>
							</li>
							<li>
								<Link
									to="projects"
									smooth={true}
									offset={-80}
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									to="contact"
									smooth={true}
									offset={-80}
								>
									Contact
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</Container>
		</div>
	)
}

export default Navbar
