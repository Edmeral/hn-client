import React from 'react'

class topPage extends React.Component {
  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(res => res.json())
      .then(console.log)
  }

  render() {
    return <div>Top items: { this.props.items } </div>
  }
}

export default topPage