import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

import Dog from '../Dog/Dog'

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {
  componentDidMount(){
    this.props.dispatch({type: "FETCH_DOGS"})
  }

  handleClick = () => {
    console.log(this.props.dogs)
  }

  render(){
    return (
       <>
        <h1>My Matches</h1>
        <button onClick={this.handleClick}>check</button>
        <div>
          {/* {this.props.dogs.map((dog) => {
            return(
              <Dog dog={dog} key={dog.id}/>
            )
          })} */}
        </div>

      </>
    )
  }
};

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  dogs: state.dogs
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
