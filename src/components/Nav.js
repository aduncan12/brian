import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <h1><Link to="/">Brian Uskokovich</Link></h1>
        <h2>EDITOR</h2>
      </div>
    );
  }
}

export default Nav;
