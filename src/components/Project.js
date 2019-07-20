import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Project extends Component {
    render() {
        //Destructuring
        const { title, description } = this.props.project
        return (
            <div>
                <h2>{ title }</h2>
                <h3>{ description }</h3>
            </div>
        )
    }
}

Project.propTypes = {
    project: PropTypes.object.isRequired
}