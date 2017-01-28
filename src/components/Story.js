import React from 'react'
import formatTime from '../helpers/formatTime'

const Story = (props) => {
	let now = Math.floor(Date.now() / 1000)
	return <li>
	  <a href="{props.story.url}">{props.story.title}</a>{' '}
		{formatTime(now - props.story.time)} by {props.story.by}
	</li>
}
	



export default Story