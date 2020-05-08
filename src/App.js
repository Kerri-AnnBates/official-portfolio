import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
	// Compensate for fixed navbar covering sections
	window.addEventListener("hashchange", () => {
		window.scrollBy(0, -80)
	}, false);

	return (
		<div className="App">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
