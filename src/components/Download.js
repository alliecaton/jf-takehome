import React from 'react'
import { HiDownload } from 'react-icons/hi'

const Download = ({ link }) => {
	return (
		<>
			<a href={link} download>
				<button className='square-button'>
					<HiDownload />
				</button>
			</a>
		</>
	)
}

export default Download
