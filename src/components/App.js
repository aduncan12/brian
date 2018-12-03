import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import '../App.css';
import Nav from './Nav'
import Main from './Main'
import Work from './Work'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Thanks from './Thanks'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path="/" component={ Main }/>
          <Route exact path="/Work" component={ Work }/>
          <Route exact path="/About" component={ About }/>
          <Route exact path="/Contact" component={ Contact }/>
          <Route exact path="/Thanks" component={ Thanks }/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
