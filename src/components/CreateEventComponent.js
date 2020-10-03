import React, {Component} from "react";
import {Control, Errors, LocalForm} from "react-redux-form";
import {Button, Col, Input, Label, Row} from "reactstrap";
import Select from 'react-select'
import { DateTimePicker } from 'react-rainbow-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


// const initialState = {
//     value: new Date('2019-10-25 10:44')},
// };


const catOptions = [
    { value: 'Hiking', label: 'Hiking' },
    { value: 'Fishing', label: 'Fishing' },
    { value: 'Biking', label: 'Biking' },
    { value: 'Jogging', label: 'Jogging'}
]

const locOptions = [
    { value: 'yosemite', label: 'Yosemite National Park' },
    { value: 'yellowstone', label: 'YellowStone National Park'},
    { value: 'grandteton', label: 'Grand Teton National Park' },
    { value: 'joaquin', label: 'Joaquin Miller Park'}
]


class NewEvent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            bgColor:"",
            bd:"",
            name:"",
            location:"",
            category:"",
            startdate:"",
            enddate:"",
            description:"",
            touch: {
                name:false,
                description:false,
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }
    handleSubmit(values) {
        console.log('Current State is:' + JSON.stringify(values) + "location:" + JSON.stringify(this.state.location) +
        "category:" + JSON.stringify(this.state.category) + "startdate:" + JSON.stringify(this.state.startdate) +
            "enddate:" + JSON.stringify(this.state.enddate));
        alert('Current State is:' + JSON.stringify(values) + "location:" + JSON.stringify(this.state.location) +
            "category:" + JSON.stringify(this.state.category) + "startdate:" + JSON.stringify(this.state.startdate) +
            "enddate:" + JSON.stringify(this.state.enddate));
        // event.preventDefault();
    }
    changeColor() {
        this.setState({
            bgColor:"cornflowerblue",
            bd:"transparent"
        })
    }


    render() {
        return (
            <div className="row col-9 offset-3">
                <div className="col-8 offset-2">
                    <h3>Create your event</h3>
                    <br/>
                </div>
                <div className="col-12 col-md-9">
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="eventname" md={3}>Event Name</Label>
                            <Col md={6}>
                                <Control.text model=".eventname" id="eventname" name="eventname"
                                              placeholder="Event Name"
                                              className="form-control"
                                              validators={{required, minLength: minLength(3), maxLength: maxLength(50)}}
                                />
                                <Errors className="text-danger" model=".eventname" show="touched"
                                        messages={{
                                            required: 'Required.',
                                            minLength: ' Must be greater than 3 characters',
                                            maxLength: ' Must be 50 characters or less'
                                        }}
                                />
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="startdate" md={3}>Start Date</Label>
                            <Col md={6}>
                                    <DateTimePicker
                                        id="startdate"
                                        placeholder="Select start date and time"
                                        value={this.state.startdate}
                                        onChange={value => this.setState({ startdate : value })}/>
                                </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="enddate" md={3}>End Date</Label>
                            <Col md={6}>
                                <DateTimePicker
                                    id="enddate"
                                    placeholder="Select end date and time"
                                    value={this.state.enddate}
                                    onChange={value => this.setState({ enddate : value })}

                                    /></Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="category" md={3}>Category</Label>
                            <Col md={6}>
                                <Select options={catOptions} selectedOption={this.state.category}
                                        onChange={selectedOption => this.setState({ category: selectedOption })}/>
                            </Col>

                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="location" md={3}>Location</Label>
                            <Col md={6}>
                                <Select options={locOptions} selectedOption={this.state.location}
                                        onChange={selectedOption => this.setState({ location: selectedOption })}/>
                            </Col>
                        </Row>

                        <Row className="description">
                            <Label htmlFor="description" md={3}>Description</Label>
                            <Col md={6}>
                                <Control.textarea type="textarea" model=".description" id="description" name="description" placeholder="Description"
                                       className="form-control"
                                       validators={{required, minLength: minLength(10), maxLength: maxLength(300)}}
                                />
                                <Errors className="text-danger" model=".description" show="touched"
                                        messages={{
                                            required: 'Required.',
                                            minLength: ' Must be greater than 10 characters',
                                            maxLength: ' Must be 300 characters or less'
                                        }}/>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Col md={{size: 10, offset: 4}}>
                                <Button type="submit" className="btn-1" style={{backgroundColor: this.state.bgColor,
                                    border:this.state.bd}}
                                        onClick={this.changeColor}>Submit</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </div>
            </div>
        );
    }

}
export default NewEvent;
