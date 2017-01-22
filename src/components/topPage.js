import React from 'react'
import Story from './Story.js'

class topPage extends React.Component {

  constructor() {
  	super();
  	this.state = {topstories: []};
  }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(res => res.json())
      .then(res => res.slice(0,30))
      .then(res => {
      	var arr = [];
      	for (var id of res) {
      		arr.push(fetch('https://hacker-news.firebaseio.com/v0/item/'+id+'.json')
      			       .then(res => res.json()));
      	}
      	return Promise.all(arr);
      })
      .then(res => this.setState({topstories: res}))
  }

  render() {
    return <div>Top items: 
    	<ul>
	      { this.state.topstories.map((story, i) => <Story key={i} story={story}/>) } 
      	</ul>
    </div>
  }
}

export default topPage