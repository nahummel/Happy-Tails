import React, { Component } from 'react';
import { connect } from 'react-redux';

class RescuePage extends Component {

  render(){
    return (
       <>
        <h1>Adoptable Dogs</h1>


        {/* <h1 id="welcome">
          Welcome, {props.rescue.username }!
        </h1>
        <p>Your ID is: {props.rescue.id}</p> */}
      </>
    )
  }
};

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  rescue: state.rescue
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(RescuePage);