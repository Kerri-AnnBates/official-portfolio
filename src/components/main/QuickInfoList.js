import React from 'react'
import { Container, Row, Col } from 'reactstrap';

const QuickInfoList = () => {
	return (
		<section className="quick-info">
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
		</section>
	)
}

export default QuickInfoList
