import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
    render() {
        return (
            <div>
                <h2>{ this.props.todo.title }</h2>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}