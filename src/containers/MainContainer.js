import React, { useState, useEffect } from 'react'
import CampaignContainer from './CampaignContainer'
import ClipLoader from 'react-spinners/ClipLoader'

const MainContainer = () => {
	const [allData, setData] = useState(null)

	useEffect(() => {
		fetch('https://www.plugco.in/public/take_home_sample_feed')
			.then(resp => resp.json())
			.then(data => setData(data.campaigns))
	}, [])

	const displayCampaigns = () => {
		if (allData) {
			return allData.map(camp => (
				<div key={camp.id}>
					<CampaignContainer
						logo={camp.campaign_icon_url}
						title={camp.campaign_name}
						pay={camp.pay_per_install}
						list={camp.medias}
					/>
				</div>
			))
		} else {
			return (
				<div>
					<ClipLoader />
				</div>
			)
		}
	}

	return <div className='main-container-flex'>{displayCampaigns()}</div>
}

export default MainContainer
