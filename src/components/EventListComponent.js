import React from "react";
import { Card, CardImg, CardBody, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom'

    const RenderItem = ({event : e, onClick}) => {
        return (
            <Card >
                <Link to={`/events/${e.id}`}>
                    <CardImg width="100%" src={e.image} alt={e.name} />
                </Link>
                <CardBody><CardTitle>{e.name}</CardTitle></CardBody>

            </Card>

        );
    }

    const EventList = (props) => {

        const list = props.event.map((e) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={e.id}>
                    <RenderItem event={e} onClick={props.onClick} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {list}
                </div>
            </div>
        );
    }



export default EventList;
