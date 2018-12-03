import React, { Component } from 'react';
import king from '../images/Artwork_by_ToddTrotta/blue_king.jpg'
import '../App.css';

class Thanks extends Component {
  render() {
    return (
      <div className="thankyou">
        <div className="thankImg">
          <img src={king} id="king" alt="Blue King" />
          <p className="attribute">Blue King by Todd Trotta</p>
        </div>
        <div id="thanks">
          <h3>Thanks for dropping me a line. I will get back to you shortly.</h3>
          <h4> - Brian Uskokovich</h4>
        </div>
        
      </div>
    );
  }
}

export default Thanks;