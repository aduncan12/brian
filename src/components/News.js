import React, { Component } from 'react';
import sdbff from '../images/SDBFF19.png'
import '../App.css';

class News extends Component {
  render() {
    return (
      <div className="news">
        <div id="events">
          <div className="thumbnails">
            <a href="https://www.imdb.com/title/tt8755500/?ref_=ttfc_fc_tt" target="_blank" rel="noopener noreferrer"><img src={sdbff} className="movieImg" alt="Brown Paper Bag"></img></a>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
