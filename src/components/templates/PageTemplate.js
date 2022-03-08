import React from 'react';
import './PageTemplate.css';
const PageTemplate = props => {
	const { subtitle } = props
	return (
		<section id="page-template-container">
			<h2>{ subtitle }</h2>
			<div className='thumbnails'>
				<div className='thumbnail'></div>
				<div className='thumbnail'></div>
				<div className='thumbnail'></div>
				<div className='thumbnail'></div>
				<div className='thumbnail'></div>
				<div className='thumbnail'></div>
			</div>
		</section>
	
	
	)
}

export default PageTemplate;