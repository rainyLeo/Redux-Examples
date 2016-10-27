import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { bindActionCreators } from 'redux';
import { toggleTodo } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    default:
      throw new Error('Unknown filter');
  }
};


const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = {
  onClick: toggleTodo
};

/* 2. 写法2
 const mapDispatchToProps = (dispatch) => ({
   onClick: bindActionCreators(toggleTodo, dispatch)
 });
 
  3. 写法3
 const mapDispatchToProps = (dispatch) => ({
   onClick: (id) => {
     dispatch(toggleTodo(id));
   }
 });
*/ 

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;