import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import AddIcon from "@material-ui/icons/Add";

import AdoptDog from "../AdoptDog/AdoptDog";

const styles = {
  root: {
    marginTop: 40,
    marginBottom: 40,
  },
  addDog: {
    height: "100%",
    display: "flex",
    textAlign: "center",
    minHeight: 300,
  },
  addIcon: {
    marginTop: 10,
  },
};

class RescuePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_DOGS", payload: this.props.user.id });
  }

  handleAddDog = () => {
    this.props.history.push("/add-dog");
  };

  render() {
    const { user, classes } = this.props;
    return (
      <Container maxWidth="xl" className={classes.root}>
        <Typography variant="h4" gutterBottom>
          {user.name} Dogs
        </Typography>
        <Grid container direction="row" spacing={4} alignItems="stretch">
          {this.props.dogs.map((dog) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <AdoptDog
                  dog={dog}
                  key={dog.id}
                  user={this.props.user}
                  history={this.props.history}
                  dispatch={this.props.dispatch}
                />
              </Grid>
            );
          })}
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card className={classes.addDog}>
              <CardActionArea
                className={classes.addDogButton}
                onClick={this.handleAddDog}
              >
                <Typography variant="h5">Add Dog</Typography>
                <AddIcon
                  color="primary"
                  fontSize="large"
                  className={classes.addIcon}
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  dogs: state.dogs,
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(withStyles(styles)(RescuePage));
