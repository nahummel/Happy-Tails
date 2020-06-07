import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    height: "100vh",
  },
  backgroundImage: {
    backgroundColor: "black",
    background: 'url("/dog.jpg") no-repeat center center fixed',
    position: "fixed",
    height: "100vh",
    width: "100%",
  },
  callToAction: {
    position: "absolute",
    top: "43%",
    left: "10%",
  },
  title: {
    color: "#fff",
    marginBottom: 30,
  },
  btn: {
    marginRight: 30,
    marginBottom: 30,
  },
};

class LandingPage extends Component {
  handleAdopt = () => {
    this.props.history.push("/home");
  };

  handleRescue = () => {
    this.props.history.push("/rescue-home");
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.backgroundImage} />
        <div className={classes.callToAction}>
          <div className={classes.title}>
            <Typography variant="h4" gutterBottom>
              Find the Perfect Dog for You
            </Typography>
            <Typography variant="h6">
              Take our questionnaire to find the new addition to your family!
            </Typography>
          </div>

          <div>
            <Button
              className={classes.btn}
              onClick={this.handleAdopt}
              variant="contained"
              color="primary"
              size="large"
            >
              I am looking to Adopt
            </Button>
            <Button
              className={classes.btn}
              onClick={this.handleRescue}
              variant="contained"
              color="primary"
              size="large"
            >
              I am a Rescue or Shelter
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(LandingPage);
