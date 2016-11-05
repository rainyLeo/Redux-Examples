import React, {Component, PropTypes, } from 'react';

export default class TodoItem extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    onCompleteTodo: PropTypes.func.isRequired,
    onEditeTodo: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired
  }
  
  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({editing: true});
  }
  
  handleBlur = (e) => {
    const { onEditeTodo, id } = this.props;
    if (e.target.value.trim()) {
      onEditeTodo(id, e.target.value);
    }
    this.setState({editing: false});
  }

  render() {
    const { completed, onCompleteTodo, onDeleteTodo, text } = this.props;
    if (this.state.editing) {
      return <input onBlur={this.handleBlur} autoFocus />;
    } else {
      return (
        <li style={{ textDecoration: completed ? 'line-through' : 'none',
        listStyleType: 'none'}}
        >
          <input type='checkbox' 
            onChange={onCompleteTodo} 
            checked={completed}
          /> 
          <span onDoubleClick={this.handleDoubleClick}
            style={{ padding: '5px 10px' }}>
            {text}
          </span>
          <button onClick={onDeleteTodo}>X</button>
        </li>
      );
    }
  }
}


