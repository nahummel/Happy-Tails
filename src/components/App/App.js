import React, {Component} from 'react';
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


import LandingPage from '../LandingPage/LandingPage';
import UserPage from '../UserPage/UserPage';
import RescuePage from '../RescuePage/RescuePage';
import AboutMe from '../AboutMe/AboutMe'


import './App.css';
import { UserType } from '../../constants';
import AddDog from '../AddDog/AddDog';
import DogProfile from '../DogProfile/DogProfile';
import UserProfile from '../UserProfile/UserProfile';
import EditDogProfile from '../EditDogProfile/EditDogProfile';
import InfoPage from '../InfoPage/InfoPage';



class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/landing" />
          
            <Route exact path="/landing" component={LandingPage} />
            <Route path="/about" component={InfoPage} />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute exact path="/home" component={UserPage} allowedRole={UserType.USER} />
            <ProtectedRoute exact path="/rescue-home" component={RescuePage} allowedRole={UserType.RESCUE} />
            <ProtectedRoute path="/about-me" component={AboutMe} allowedRole={UserType.USER} />
            <ProtectedRoute path="/user=profile" component={UserProfile} allowedRole={UserType.USER} />
            <ProtectedRoute path="/add-dog" component={AddDog} allowedRole={UserType.RESCUE} />
            <ProtectedRoute path="/dog-profile" component={DogProfile} allowedRole={UserType.RESCUE} />
            <ProtectedRoute path="/edit-dog" component={EditDogProfile} allowedRole={UserType.RESCUE} />
            
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);

