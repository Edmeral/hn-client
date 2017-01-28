function fetchPosts(storyType) {
  return fetch('https://hacker-news.firebaseio.com/v0/' + storyType +'.json')
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
}

export default fetchPosts