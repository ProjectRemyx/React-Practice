import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: this.props.todo.completed ? 'grey' : 'white',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }


    render() {
        return (
            <div style= {this.getStyle()}>
                <h2>{ this.props.todo.title }</h2>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}