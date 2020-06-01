import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core'

import Dog from '../Dog/Dog'

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {
  componentDidMount(){
    this.props.dispatch({type: "FETCH_DOGS"})
  }

  render(){
    return (
       <>
        <h1>My Matches</h1>
        <div>
          <Grid container spacing={4}>
          {this.props.dogs.map((dog) => {
            return(
              <Grid item xs={12} md={4} lg={2} xl={2}><Dog dog={dog} key={dog.id} history={this.props.history} dispatch={this.props.dispatch} /></Grid>
            )
          })}
          </Grid>
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
  dogs: state.dogs,
  dispatch: state.dispatch
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
