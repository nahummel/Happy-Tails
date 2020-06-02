import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import AdoptDog from '../AdoptDog/AdoptDog'

class RescuePage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_DOGS", payload: this.props.user.id })
  }

  render() {
    return (
      <>
        <h1>Adoptable Dogs</h1>
        <div>
          <Grid container spacing={4}>
            {this.props.dogs.map((dog) => {
              return (
                <Grid item xs={12} md={4} lg={2} xl={2}><AdoptDog dog={dog} key={dog.id} history={this.props.history} dispatch={this.props.dispatch} /></Grid>
              )
            })}
            <Card>
              <CardContent className="cardContent">
                <Grid item xs={12} md={4} lg={2} xl={2}><button>Add Dog</button></Grid>
              </CardContent>
            </Card>
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
export default connect(mapStateToProps)(RescuePage);