import React, {Component} from "react";
import { Breadcrumb, BreadcrumbItem, Button, Col, Row, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched : {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(values) {
        console.log('Current State is:' + JSON.stringify(values));
        alert('Current State is:' + JSON.stringify(values));
        // event.preventDefault();
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    {/*<Breadcrumb>*/}
                    {/*    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>*/}
                    {/*    <BreadcrumbItem active>Contact Us</BreadcrumbItem>*/}
                    {/*</Breadcrumb>*/}
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            xxx<br/>
                            <br/>
                            <br/>
                            <i className="fa fa-phone"></i>: +000 0000 0000<br/>
                            <i className="fa fa-fax"></i>: +000 0000 0000<br/>
                            <i className="fa fa-envelope"></i>: <a
                            href="mailto:confusion@food.net">xxx@gochill.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i
                                className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i
                                className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;
