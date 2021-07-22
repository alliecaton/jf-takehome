import React from 'react'
import Copy from './../components/Copy'
import Download from './../components/Download'
import { FaPlay } from 'react-icons/fa'

const MediaContainer = ({ list }) => {
	//didn't have time to finish iframe video playing

	// const playVideo = e => {
	// 	const icon = document.getElementById('playvideo')
	// 	console.log(document.getElementById(`video${icon.id}`))
	// }

	const displayList = () => {
		return list.map((media, index) => (
			<div>
				<div className='cover-photos-overlay'>
					{media.media_type === 'video' ? (
						<FaPlay
							className='play-button'
							id='playvideo'
							value={index}
							// onClick={e => playVideo(e)}
						/>
					) : (
						''
					)}
					<img
						className='cover-photos'
						src={media.cover_photo_url}
						alt='cover'
					/>

					{/* <iframe
						title={index}
						className='cover-photos'
						id={`video${index}`}
						value={index}
						src={media.download_url}></iframe> */}
				</div>
				<div className='buttons-container'>
					<Copy link={media.tracking_link} />
					<Download link={media.download_url} />
				</div>
			</div>
		))
	}

	console.log(list)
	return <div className='scroller-parent'>{displayList()}</div>
}

export default MediaContainer
