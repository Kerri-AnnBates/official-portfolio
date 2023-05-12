import React from 'react'
import { Container } from 'reactstrap';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const Navbar = () => {
	return (
		<div className="nav-bar">
			<Container fluid={true}>
				<div className="nav-wrapper">
					<div className="logo">
						<div><FontAwesomeIcon icon={icon({ name: "laptop-code" })} size="lg" className="icons" /></div>
					</div>
					<nav>
						<ul>
							<li>
								<Link
									activeClass="active"
									to="intro"
									smooth={true}
									offset={-80}
									spy={true}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									activeClass="active"
									to="about"
									smooth={true}
									offset={-80}
									spy={true}
								>
									About
								</Link>
							</li>
							<li>
								<Link
									activeClass="active"
									to="projects"
									smooth={true}
									offset={-80}
									spy={true}
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									activeClass="active"
									to="contact"
									smooth={true}
									spy={true}
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
