import React, { Component } from 'react';
import lamplighter from '../images/Artwork_by_ToddTrotta/lamplighter.jpg'
import '../App.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div id="profilePic">
          <img src={lamplighter} id="pic" alt="Lamplighter"></img>
          <p className="attribute">Lamplighter by Todd Trotta</p>
        </div>

        <div id="summary">
          <p>Following an invigorating and reflective year of international travel, I was inspired to change careers and began carving a new path in post production. I wanted to help filmmakers tell their stories and began my journey to the editing chair.</p>

          <p>With over 10 years of experience in this field, I’ve worked in various capacities, becoming uniquely skilled in bridging the technical workflows/processes of post-production with creative storytelling. This has been especially valuable for independent films requiring a professional editor who can carry a project in both a creative and technical capacity — a highly effective editor/assistant combination.</p>

          <p>I’d love to hear about the stories you want to bring to the screen and look forward to collaborating with you in the edit.</p>
        </div>
      </div>
    );
  }
}

export default About;
