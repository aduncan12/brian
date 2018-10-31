import React, { Component } from 'react';
import waiting from '../images/Artwork_by_ToddTrotta/waiting_backstage.JPG';
import '../App.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <img src={waiting} className="waiting" alt="waiting backstage" />
      </div>
    );
  }
}

export default Main;
