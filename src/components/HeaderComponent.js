import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler,  Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModelOpen: false
        };
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModel=this.toggleModel.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }
    toggleNav() {
        this.setState( {
            isNavOpen: ! this.state.isNavOpen
        });
    }

    toggleModel() {
        this.setState({
            isModelOpen: !this.state.isModelOpen
        });
    }

    handleLogin(event){
        this.toggleModel();
        alert("Username: " + JSON.stringify(this.username.value) + " Password: " + JSON.stringify(this.password.value)
            + " Remember: " + JSON.stringify(this.remember.checked));
        event.preventDefault();
    }


    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className='mr-auto' href="/">
                            <h3>GoChi!</h3>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span> Home</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/events">
                                        <span> Events</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span> Contact Us</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink to="/account">
                                        <Button className="btn-out">
                                            <span>Sign up</span></Button>
                                        </NavLink>
                                    <Button className="btn-out" onClick={this.toggleModel}>
                                        <span>Sign in</span></Button>

                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h3><b>START AN OUTDOOR EVENT</b></h3>
                                <p>Make friends and enjoy your life.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModel}>
                    <ModalHeader toggle={this.toggleModel}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label for="username"> Username</Label>
                                <Input type="text" id="username" name="username" innerRef={(input)=>this.username=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={(input=>this.password=input)}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={(input)=>this.remember=input}/>
                                    Remember Me
                                </Label>
                            </FormGroup>
                            <div>
                                <Button className="btn-1" type="submit" value="submit" >Login</Button>
                            </div>

                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;
