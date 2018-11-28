import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
          <p id="brian"><Link to="/">Brian Uskokovich</Link></p>
          <div id="editor">
            <div id="editorDiv">
              <p>E</p>
              <p>D</p>
              <p>I</p>
              <p>T</p>
              <p>O</p>
              <p>R</p>
            </div>
          </div>
      </div>
    );
  }
}

export default Nav;
