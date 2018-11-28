import React, { Component } from 'react';
import lamplighter from '../images/Artwork_by_ToddTrotta/lamplighter.jpg'
import '../App.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contactImg">
          <img src={lamplighter} id="lamplighter" alt="lamplighter" />
          <p className="attribute">Lamplighter by Todd Trotta</p>
        </div>
        
        <div id="contactForm">
          <form className="message" method="GET" action="/page">   
            <input type="text" className="comment" id="commentName" name="name" placeholder="Name" />
            <input type="text" className="comment" id="commentEmail" name="email" placeholder="Email" />
            <textarea type="text" className="comment" id="commentComment" name="comment" placeholder="Say hi..." />                  
            <input type="submit" className="comment" id="commentSubmit" value="SUBMIT" />
          </form>
        </div> 
      </div>
    );
  }
}

export default Contact;