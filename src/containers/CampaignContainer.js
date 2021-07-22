import React from 'react'
import Logo from './../components/Logo.js'
import Title from './../components/Title.js'
import MediaContainer from './MediaContainer'

const CampaignContainer = ({ logo, title, pay, list }) => {
	return (
		<div className='parent-grid'>
			<div className='campaign-grid'>
				<Logo logo={logo} />
				<Title title={title} pay_per={pay} />
			</div>
			<div>
				<MediaContainer list={list} />
			</div>
		</div>
	)
}

export default CampaignContainer
