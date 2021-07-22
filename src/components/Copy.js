import React from 'react'
import { ImLink } from 'react-icons/im'

const Copy = ({ link }) => {
	const copyLink = () => {
		navigator.clipboard.writeText(link)
	}

	return (
		<>
			<button className='square-button copy' onClick={copyLink}>
				<ImLink />
			</button>
		</>
	)
}

export default Copy
