import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import '../App.css';
import Nav from './Nav'
import Main from './Main'
import Work from './Work'
import About from './About'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" component={ Main } />
          <Route path="/Work" component={ Work } />
          <Route path="/About" component={ About } />
          <Route path="/Contact" component={ Contact } />
        </Switch>
      </div>
    );
  }
}

export default App;
