import React, { Component } from 'react';
import '../App.css';

class News extends Component {
  render() {
    return (
      <div className="news">
        <div id="events">
          <div className="event">
            <h2>“BROWN PAPER BAG” WINS BEST FILM AND BEST DIRECTOR AT THE 2019 SAN DIEGO BLACK FILM FESTIVAL!</h2>
            <h4>February 2, 2019</h4>
          </div>
          <hr/>
          <div className="event">
            <a href="https://www.sandiegouniontribune.com/entertainment/movies/sd-et-
            movies-black-film-festival-20190122-story.html" target="_blank" rel="noopener noreferrer"><h2>“A PEEK INTO 'BROWN PAPER BAG' AND THE SAN DIEGO BLACK FILM FESTIVAL”</h2></a>
            <h3>- THE SAN DIEGO TRIBUNE</h3>
            <h4>January 24, 2019</h4>
          </div>
          <hr/>
          <div className="event">
            <h2>“BROWN PAPER BAG” SELECTED TO SCREEN AT THE 2019 SAN DIEGO BLACK FILM FESTIVAL!</h2>
            <h4>January 7, 2019</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
