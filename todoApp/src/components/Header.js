import React, {Component, PropTypes} from 'react';

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  
  handleSubmit = (e) => {
    const value = e.target.value.trim();
    if (value && e.which === 13) {
      this.props.addTodo(value);
      e.target.value = '';
    }
  }

  render() {
    return (
      <header>
        <h1>todos</h1>
        <input onKeyDown={this.handleSubmit} />
      </header>
    );
  }
}
