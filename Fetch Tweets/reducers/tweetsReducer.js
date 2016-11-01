export default function reducer(state = {
	tweets: [],
	fetching: false,
	fetched: false,
	error: null
}, action) {
	
	switch (action.type) {
		case 'FETCH_TWEETS':
			return {...state, fetching: true};
		case 'FETCH_TWEETS_REJECTED':
			return {...state, fetching: false, error: action.payload};
		case 'FETCH_TWEETS_FULFILLED':
			return {
				...state,
				fetching: false,
				fetched: true,
				tweets: action.payload
			};
		case 'ADD_TWEET':
			return {
				...state,
				tweets: [...state.tweets, action.payload]
			};

		case 'DELETE_TWEET':
			return {
				...state,
				tweets: state.tweets.filter(tweet => tweet.id !== action.payload)
			};
	}
	
	return state;
}











