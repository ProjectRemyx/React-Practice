import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Project extends Component {
    render() {
        return (
            <div>
                <h2>{ this.props.project.title }</h2>
                <h3>{ this.props.project.description }</h3>
            </div>
        )
    }
}

Project.propTypes = {
    project: PropTypes.object.isRequired
}