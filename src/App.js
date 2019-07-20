import React, { Component } from 'react';
import './App.css';

import Todos from './components/Todos';
import Projects from './components/Projects';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Test',
        completed: 'true'
      },
      {
        id: 2,
        title: 'Test 2',
        completed: 'false'
      },
      {
        id: 3,
        title: 'Test 3',
        completed: 'false'
      },
    ],
    
    projects: [
      {
        id: 1,
        title: 'Trident',
        img: 'link',
        site: 'link',
        git: 'link',
        description: 'C# /.NET / MVC / EF6 / MySQL'
      },
      {
        id: 2,
        title: 'Tollo',
        img: 'link',
        site: 'link',
        git: 'link',
        description: 'PHP / CSS / JavaScript / MySQL'
      }
    ]

  }
  render(){
    return (
      <div className="App">
        <h1>Hi</h1>
        {/* Adding a property called todos and passing it to the Todos component */}
        <Todos todos={ this.state.todos }/>
        <Projects projects = { this.state.projects }/>
      </div>
    );
  }
}

export default App;
