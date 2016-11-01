import React from 'react';
import { connect } from 'react-redux';
import {fetchTweets, addTweet} from '../actions/tweetsActions';
let Button = ({ dispatch }) => {
  let input;
  return (
    <div>
      <button onClick={() => {
        dispatch(fetchTweets());
      }}>
        load async tweets 
      </button>
			{' '}{' '}{' '}
      <button onClick={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTweet(input.value));
      }}>
        add tweet
      </button>
      <input ref={node => {
        input = node;
      }}/>
    </div>
  );
};

Button = connect()(Button);
export default Button;