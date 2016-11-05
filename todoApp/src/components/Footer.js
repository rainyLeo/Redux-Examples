import React, {PropTypes, Component, } from 'react';

const FILTER_TITLES = {
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed',
};

export default class Footer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    visibilityFilter: PropTypes.string.isRequired,
    toggleFilter: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired
  }
  
  renderFilterLink() {
    const { toggleFilter, visibilityFilter } = this.props;
    
    return ['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED'].map(filter => {
      if (filter === visibilityFilter) {
        return (
          <span key={filter} filter={filter} 
            onClick={(e) => {
              e.preventDefault();
              toggleFilter(filter);
            }}>{FILTER_TITLES[filter]}{' '}</span>
        );
      } else {
        return (
          <a href={'#'} key={filter} filter={filter} 
            onClick={(e) => {
              e.preventDefault();
              toggleFilter(filter);
          }}>{FILTER_TITLES[filter]}{' '}</a>
        );
      }
    });
  }
  
  render() {
    const { todos, clearCompleted } = this.props;
    const completedCount = todos.reduce((num, todo) => {
      return todo.completed ? num + 1 : num;
    }, 0);
    const activeCount = todos.length - completedCount;

    return (
      <footer>
        <span>{activeCount} {'items left '}</span>

        {this.renderFilterLink()}

        <button onClick={() => {
          if (completedCount > 0) {
            clearCompleted();
          }
        }}>
          Clear Completed
        </button>
      </footer>
    );
  }
}
