fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
  .then(storiesIds => {
    console.log('Hello World!')
    return storiesIds
      .slice(0, 30)
      .map(id => `https://hacker-news.firebaseio.com/v0/item/${id}.json?`)
  })
  .then(console.log)
  .catch(err => { throw err })