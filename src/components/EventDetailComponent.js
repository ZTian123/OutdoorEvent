import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    Button,
    ModalBody, Modal, Form
} from 'reactstrap';





class EventDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModelOpen: false
        };
        this.toggleModel=this.toggleModel.bind(this);
        this.handleJoin=this.handleJoin.bind(this);
    }

    toggleModel = () => {
        this.setState({isModelOpen : !this.state.isModelOpen});
    }
    handleJoin = (event) => {
        this.toggleModel();
        alert("EventID: " + JSON.stringify(this.props.item.id));
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>{this.props.item.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                        <div className="col-6">
                            <Card>
                                <CardImg width="100%" src={this.props.item.image} alt={this.props.item.name}/>
                                <CardBody>
                                    <CardText>{this.props.item.description}</CardText>
                                </CardBody>
                            </Card>

                        </div>
                    <div className="col">
                        <div className="row">
                            <div className="col-3"><b>Category:</b></div>
                            <div className="col-9">{this.props.item.category}</div>
                        </div>
                        <div className="row">
                            <div className="col-3"><b>Owner:</b></div>
                            <div className="col-9">{this.props.item.owner}</div></div>
                        <div className="row">
                            <div className="col-3"><b>Location:</b></div>
                            <div className="col-9">{this.props.item.location}</div>
                        </div>
                        <div className="row">
                            <div className="col-3"><b>Start Date:</b></div>
                            <div className="col-9">{this.props.item.startDate}</div></div>
                        <div className="row">
                            <div className="col-3"><b>End Date:</b></div>
                            <div className="col-9">{this.props.item.endDate}</div>
                        </div>
                        <div className= "col-6 offset-3">
                            <Button onClick={this.toggleModel} className="btn-1">Join</Button></div>
                    </div>
                </div>
                <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModel}>
                    <ModalBody toggle={this.toggleModel}>
                        <Form onSubmit={this.handleJoin}>
                            <div className="row justify-content-center"> Would you like to join this event ?</div>
                            <div className="row justify-content-center">
                                <Button className="btn-1" type="submit" value="submit" >Submit</Button>
                            </div>

                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


export default EventDetail;
