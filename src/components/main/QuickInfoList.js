import React from 'react'
import { Row, Col, Container } from 'reactstrap';

const QuickInfoList = () => {
	return (
		<section className="about-section" id="about">
			<div className="bar"></div>
			<Container fluid={true}>
				<div className="sub-titles"><h2>About</h2></div>
				<div className="quick-info">
					<Row>
						<Col sm="12" md="4">
							<div className="block">
								<div className="icon-wrapper"><i className="fas fa-mobile-alt"></i></div>
								<h3>Responsive</h3>
								<div className="description">
									<p>Scalable and responsive layouts</p>
								</div>
							</div>
						</Col>
						<Col sm="12" md="4">
							<div className="block">
								<div className="icon-wrapper"><i className="fas fa-server"></i></div>
								<h3>Maintanable</h3>
								<div className="description">
									<p>Clean and maintanable code</p>
								</div>
							</div>
						</Col>
						<Col sm="12" md="4">
							<div className="block">
								<div className="icon-wrapper"><i className="fas fa-spinner"></i></div>
								<h3>Dynamic</h3>
								<div className="description">
									<p>More than just a static site</p>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</section>
	)
}

export default QuickInfoList
