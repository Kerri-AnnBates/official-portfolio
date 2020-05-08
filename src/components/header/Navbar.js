import React from 'react'
import { Container } from 'reactstrap';

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
							<li><a href="#intro" className="active">Home</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="#projects">Projects</a></li>
							<li><a href="#contact">Contact</a></li>
						</ul>
					</nav>
				</div>
			</Container>
		</div>
	)
}

export default Navbar
