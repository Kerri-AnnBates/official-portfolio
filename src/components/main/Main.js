import React from 'react'
import QuickInfoList from './QuickInfoList';
import Details from './Details';
import Projects from './Projects';
import Contact from './Contact';

const Main = () => {
	return (
		<main>
			<QuickInfoList />
			<Details />
			<Projects />
			<Contact />
		</main>
	)
}

export default Main