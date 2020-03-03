import React from 'react'

const QuickInfoList = () => {
	return (
		<section className="quick-info">
			<div className="block">
				<div><i class="fas fa-mobile-alt"></i></div>
				<h3>Responsiveness</h3>
				<div className="description">
					<p>Scalable and responsive layouts</p>
				</div>
			</div>
			<div className="block">
				<div><i class="fas fa-server"></i></div>
				<h3>Maintanable</h3>
				<div className="description">
					<p>Clean and maintanable code</p>
				</div>
			</div>
			<div className="block">
				<div><i class="fas fa-spinner"></i></div>
				<h3>Dynamic</h3>
				<div className="description">
					<p>More than just a static site</p>
				</div>
			</div>
		</section>
	)
}

export default QuickInfoList
