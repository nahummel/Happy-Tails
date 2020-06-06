import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";

import Dog from "../Dog/Dog";

const styles = {
  root: {
    marginTop: 40,
    marginBottom: 40,
  },
};

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER_QUEST" });
    this.props.dispatch({ type: "FETCH_DOGS" });
  }
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xl" className={classes.root}>
        <Typography variant="h4" gutterBottom>
          My Matches
        </Typography>
        <Grid container direction="row" spacing={4}>
          {this.props.dogs.map((dog) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Dog
                  dog={dog}
                  key={dog.id}
                  user={this.props.user}
                  userQuest={this.props.userQuest}
                  history={this.props.history}
                  dispatch={this.props.dispatch}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  userQuest: state.userQuest,
  dogs: state.dogs,
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(withStyles(styles)(UserPage));
