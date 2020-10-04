import React from 'react';
import { Card, CardImg, CardImgOverlay,} from 'reactstrap';

import {Button} from 'reactstrap';
import {NavLink} from "react-router-dom";


const RenderCard = () => {
    return(
        <div>
        <Card>
            <CardImg src='/assets/images/home.jpg' alt={""} />
            <CardImgOverlay  className="card-img-overlay">
                <div className="row justify-content-center">
                    <NavLink to="/events" >
                        <Button className="btn-2">Join an Event</Button>
                    </NavLink>
                </div>
                <div className="row justify-content-center">
                    <NavLink to="/events/creation" >
                        <Button className="btn-2">Create an Event</Button>
                    </NavLink>
                </div>
            </CardImgOverlay>
        </Card>
        </div>
    );
}


const Home = (props) => {
    return (
            <div className="container">
                <div className="col-12 col-md m-1">
                    <RenderCard />
                </div>
            </div>

    );
}
export default Home;
