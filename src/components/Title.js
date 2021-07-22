import React from 'react'

const Title = ({ title, pay_per }) => {
	return (
		<div className='title-info'>
			<h4>{title}</h4>
			<p className='green'>
				<strong>{pay_per}</strong> per install
			</p>
		</div>
	)
}

export default Title
