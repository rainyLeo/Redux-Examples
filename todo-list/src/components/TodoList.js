import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onClick }) => (
  <ul>
    { todos.map(todo => 
      <Todo 
        key={todo.id}
        text={todo.text}
        completed={todo.completed}
        onTodoClick={() => {
          onClick(todo.id)
        }}
      />
    )}
  </ul>
);

export default TodoList;