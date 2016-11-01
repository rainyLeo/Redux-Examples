import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { fetchUser } from '../actions/userActions';

class Layout extends React.Component {
	componentWillMount() {
		this.props.dispatch(fetchUser());
	}
	
	render() {
		const { user, tweets } = this.props;
		if (!tweets.length) {
			return <Button />;
		}
		let id = 0;
		const mappedTweets = tweets.map(tweet => {
			if (tweet.text)	{
				return 	<li key={id++}>{tweet.text}</li>;
			}
		});
		
		return (
			<div>
				<Button />
				<h1>{user.name}</h1>
				<ul>{mappedTweets}</ul>
			</div>
		); 
	}
}

const mapStateToProps = (state) => ({
	user: state.user.user,
	userFetched: state.user.fetched,
	tweets: state.tweets.tweets
});

// 方法2 (不需要使用mapStateToProps和connect)
// @connect((store) => {
// 	return {
// 		user: store.user.user,
// 		userFetched: store.user.fetched,
// 		tweets: store.tweets.tweets
// 	};
// })  
Layout = connect(mapStateToProps)(Layout);
export default Layout;
