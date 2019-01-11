import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Footer extends Component {
    render () {
        return (
            <div className="footer">
                <div className="links">
                    {/* <p><Link to="News">News</Link></p> */}
                    <p><Link to="About">About</Link></p>
                    <p><Link to="Work">Work</Link></p>
                    <p><Link to="Contact">Contact</Link></p>
                </div>
            </div>
        );
    }
}

export default Footer;