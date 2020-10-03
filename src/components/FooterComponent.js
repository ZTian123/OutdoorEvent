import React from 'react';
import {Link, NavLink} from 'react-router-dom';

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-left">
                    <div className="col-4 offset-1 col-sm-2">
                        <ul className="list-unstyled">
                            <li><Link to="/home" className="links">Home</Link></li>
                            <li><Link to='/events' className="links">Events</Link></li>
                            <li><Link to='/contactus' className="links">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2020 GoChil!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
