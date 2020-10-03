import {Control, Errors, LocalForm} from "react-redux-form";
import {Button, Col, Label, Row} from "reactstrap";
import React, {Component} from "react";


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validPassword =(val) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/i.test(val);


class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor:'',
            bd:'',
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            password:'',
            cpassword: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false,
                password:false,
                cpassword: false
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }


    handleSubmit(values) {
        console.log('Current State is:' + JSON.stringify(values));
        alert('Current State is:' + JSON.stringify(values));
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
                    <h3>Create an account</h3>
                    <br/>
                </div>
                <div className="col-12 col-md-9">
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="firstname" md={3}>First Name</Label>
                            <Col md={6}>
                                <Control.text model=".firstname" id="firstname" name="firstname"
                                              placeholder="First Name"
                                              className="form-control"
                                              validators={{required, minLength: minLength(3), maxLength: maxLength(15)}}
                                />
                                <Errors className="text-danger" model=".firstname" show="touched"
                                        messages={{
                                            required: 'Required.',
                                            minLength: ' Must be greater than 2 characters',
                                            maxLength: ' Must be 15 characters or less'
                                        }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="lastname" md={3}>Last Name</Label>
                            <Col md={6}>
                                <Control.text model=".lastname" id="lastname" name="lastname" placeholder="Last Name"
                                              className="form-control"
                                              validators={{required, minLength: minLength(3), maxLength: maxLength(15)}}
                                />
                                <Errors className="text-danger" model=".lastname" show="touched"
                                        messages={{
                                            required: 'Required.',
                                            minLength: ' Must be greater than 2 characters',
                                            maxLength: ' Must be 15 characters or less'
                                        }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="telnum" md={3}>Contact Tel.</Label>
                            <Col md={6}>
                                <Control.text model=".telnum" id="telnum" name="telnum" placeholder="Tel. Number"
                                              className="form-control"
                                              validators={{
                                                  required,
                                                  minLength: minLength(3),
                                                  maxLength: maxLength(15),
                                                  isNumber
                                              }}/>
                                <Errors className="text-danger" model=".telnum" show="touched"
                                        messages={{
                                            required: 'Required.',
                                            minLength: ' Must be greater than 2 numbers',
                                            maxLength: ' Must be 15 numbers or less',
                                            isNumber: ' Must be a number'
                                        }}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="email" md={3}>Email</Label>
                            <Col md={6}>
                                <Control.text model=".email" id="email" name="email" placeholder="Email"
                                              className="form-control"
                                              validators={{required, validEmail}}/>
                                <Errors className="text-danger" model=".email" show="touched"
                                        messages={{
                                            required: 'Required.',
                                            validEmail: ' Invalid Email Address'
                                        }}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="password" md={3}>Password</Label>
                            <Col md={6}>
                                <Control.password model=".password" id="password" name="password" placeholder="Password"
                                              className="form-control"
                                              validators={{required,
                                                  minLength: minLength(8),
                                                  maxLength: maxLength(32),
                                                  validPassword,
                                              }}/>
                                <Errors className="text-danger" model=".password" show="touched"
                                        messages={{
                                            required: 'Required.',
                                            validPassword: ' Please enter a password with at least 8 characters, ' +
                                                'including one uppercase letter, one lowercase letter, one digit number.'
                                        }}/>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Col md={{size: 8, offset: 3}}>
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox model=".agree" name="agree"
                                                          className="form-check-input"/>{' '}
                                        <strong>Would you like to receive update news from GoChi!</strong>
                                    </Label>
                                </div>
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
export default Account;
