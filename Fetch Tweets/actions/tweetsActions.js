import axios from 'axios';

export function fetchTweets() {
  return function(dispatch) {
    fetch('http://rest.learncode.academy/api/test123/tweets')
      .then(response => response.json())
			.then(json => dispatch({
        type: 'FETCH_TWEETS_FULFILLED', 
        payload: json
      }))
			.catch(err => dispatch({
        type: 'FETCH_TWEETS_REJECTED', payload: err
      }));
      
    // 方法2 
    // axios.get('http://rest.learncode.academy/api/test123/tweets')
    // 	.then(response => {
    //    console.log(response);
    //    dispatch({type: 'FETCH_TWEETS_FULFILLED', payload: response});
    //  });
      
  };
}

let tweetId = 0;
export function addTweet(text) {
	return {
		type: 'ADD_TWEET',
		payload: {
			id: tweetId++,
			text
		}
	};
}

