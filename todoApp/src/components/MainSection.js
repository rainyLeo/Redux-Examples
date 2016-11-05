import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';
import Footer from './Footer';

export default class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    visibilityFilter: PropTypes.string.isRequired
  }

  getFilteredTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(todo => !todo.completed);
      default:
        throw new Error('Unkown filter', filter);
    }
  }

  render() {
    const { todos, visibilityFilter, actions } = this.props;
    const filteredTodos = this.getFilteredTodos(todos, visibilityFilter);
    
    return (
      <main>
        <input type='checkbox' 
          onChange={() => {
            if (todos.length > 0) {
              actions.completeAll();
            }}}
          id='check' /> 
        <label htmlFor='check'>{'Check All '}</label>

        <ul>
          {filteredTodos.map(todo => {
            return (
              <TodoItem key={todo.id} 
                {...todo}
                onEditeTodo={actions.editTodo}
                onCompleteTodo={() => actions.completeTodo(todo.id)}
                onDeleteTodo={() => actions.deleteTodo(todo.id)}
              />
            );
          })}
        </ul>

        <Footer todos={todos}
          visibilityFilter={visibilityFilter}
          clearCompleted={actions.clearCompleted} 
          toggleFilter={actions.setVisibilityFilter} />
      </main>
    );
  }
}
