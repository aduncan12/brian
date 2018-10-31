import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">

        <header>
          <h1><Link to="/">Brian Uskokovich</Link></h1>
          <h3>Editor | Colorist</h3>
        </header>

        <div className="links">
          <p><Link to="About">About</Link></p>
          <p><Link to="Work">Work</Link></p>
          <p><Link to="Contact">Contact</Link></p>
        </div>

      </div>
    );
  }
}

export default Nav;
