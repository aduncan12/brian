import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
          <p id="brian"><Link to="/">Brian Uskokovich</Link></p>
          <p id="editor">EDITOR</p>
      </div>
    );
  }
}

export default Nav;
