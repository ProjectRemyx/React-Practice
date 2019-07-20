import React, { Component } from 'react'
import Project from './Project';

import PropTypes from 'prop-types';

export default class Projects extends Component {
    render() {
        return this.props.projects.map((project) => (
            <Project key = { project.id } project = { project }/>
        ));
    }
}

Projects.propTypes = {
    projects: PropTypes.array.isRequired
}