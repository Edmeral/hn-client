import React from 'react'

const Story = (props) => (
	<li>
	  <a href="{props.story.url}">{props.story.title}</a>
	  {props.story.time} by {props.story.by}
	</li>
)

export default Story