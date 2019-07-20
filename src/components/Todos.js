import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
  render(){
      //App js passes state to todos prop and now this component has the state info
      return this.props.todos.map((todo) => (
        <TodoItem key={ todo.id } todo={todo}/>
      ));
  }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
