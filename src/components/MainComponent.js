import React, { Component } from 'react';
import Home from './HomeComponent';
import EventList from './EventListComponent';
import { EVENTS } from '../shared/events';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from "./ContactComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import EventDetail from "./EventDetailComponent";
// import { connect } from 'react-redux';
import Account from "./AccountComponent";
import NewEvent from "./CreateEventComponent";

// link the state from reducer
// const mapStateToProps = state => {
//     return {
//         events: state.events,
//     }
// }




class Main extends Component {


    constructor(props) {
        super(props);

        this.state = {
            events: EVENTS,
            user: "",
        };
    }

    render() {
        const EventWithId = ({match})  => {
            return(
                <EventDetail item={this.state.events.filter((e) => e.id === parseInt(match.params.eventId, 10))[0]}
                />
            );
        }

        return (
            <div>
                <Header />
                <div>
                <Switch>

                    <Route path="/home" component={Home} />
                    <Route exact path="/events/creation" component={() => <NewEvent />}/>
                    <Route exact path="/events" component={() => <EventList event={this.state.events}/> }/>
                    <Route path="/events/:eventId" component={EventWithId}/>
                    <Route exact path="/contactus" component={Contact}/>
                    <Route path="/account" component={Account} />

                    <Redirect to="/home" />
                </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

// linked page with reducer
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
export default withRouter(Main);
