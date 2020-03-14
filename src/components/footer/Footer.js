import React from 'react'

const Footer = () => {

	const currentYear = new Date().getFullYear();

	return (
		<footer style={{ textAlign: "center", backgroundColor: "#28231E", color: "#fff", padding: "2rem 0" }}>
			<p style={{ margin: 0, fontSize: "1.25rem" }}>Kerri-Ann Bates &copy; {currentYear}</p>
		</footer>
	)
}

export default Footer;
