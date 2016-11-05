import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions';

let App = ({ todos, visibilityFilter, actions }) => (
    <div>
      <Header addTodo={actions.addTodo} />
      <MainSection todos={todos} 
        visibilityFilter={visibilityFilter}
        actions={actions} />
    </div>
);

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  visibilityFilter: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;