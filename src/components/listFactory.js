import React from 'react'
import Story from './Story.js'
import fetchPosts from '../api/'

function createList(storyType) {
  return class StoriesList extends React.Component {
    constructor() {
      super();
      this.state = {stories: []};
    }

    componentDidMount() {
      fetchPosts(storyType).then(res => this.setState({stories: res}))
    }

    render() {
      return <ul>
        { this.state.stories.map((story, i) => <Story key={i} story={story}/>) } 
        </ul>
    }
  }
}

export default createList
