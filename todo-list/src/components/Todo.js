import React from 'react';

const Todo = ({ completed, text, onTodoClick }) => (
  <li 
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
    onClick={onTodoClick}
  >
    {text}
  </li>
)

export default Todo;