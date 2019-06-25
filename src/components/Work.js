import React, { Component } from 'react';
import bag from '../images/PosterArt_IMDB/BrownPaperBag.jpg'
import irregardless from '../images/PosterArt_IMDB/Irregardless.jpg'
import stay from '../images/PosterArt_IMDB/TheStay.jpg'
import director from '../images/BPB_SDBFF_BestDirector_Laurel.png'
import film from '../images/BPB_SDBFF_BestFilm_Laurel.png'
import irregardLaurel from '../images/LaurelsFirstTimeSessions.png'
import '../App.css';

class Work extends Component {
  render() {
    return (
      <div className="work">
        <div id="posters">
          <div id="posters2">
            <div className="thumbnails">
              <a href="https://www.imdb.com/title/tt7042798/?ref_=nv_sr_2" target="_blank" rel="noopener noreferrer"><img src={stay} className="movieImg" alt="The Stay"></img></a>
            </div>
            <div className="thumbnails">
              <a href="https://www.imdb.com/title/tt8755500/?ref_=ttfc_fc_tt" target="_blank" rel="noopener noreferrer"><img src={bag} className="movieImg" alt="Brown Paper Bag"></img></a>
            </div>
            <div className="thumbnails">
              <a href="https://www.imdb.com/title/tt7797870/?ref_=fn_al_tt_1" target="_blank" rel="noopener noreferrer"><img src={irregardless} className="movieImg" alt="Irregardless"></img></a>
            </div>
          </div> 
          <div id="notes">
            <div className="newsThumbnails">
              <img src={director} className="sdbff" alt="San Diego Black Film Festival 2019 Best Director"></img>
              <img src={film} className="sdbff" alt="San Diego Black Film Festival 2019 Best Film"></img>
              <img src={irregardLaurel} className="sdbff" id="irregardLaurel"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
