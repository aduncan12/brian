import React, { Component } from 'react';
import waiting from '../images/Artwork_by_ToddTrotta/waiting_backstage.JPG';
import '../App.css';


class Main extends Component {
  render() {
    return (
      <div className="main">
        <div id="imgDiv">
          <div id="image">
          <img src={waiting} className="waiting" alt="waiting backstage" />
          <p className="attribute">Waiting Backstage by Todd Trotta</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
