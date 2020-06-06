import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import "./LandingPage.css";

class LandingPage extends Component {
  handleAdopt = () => {
    this.props.history.push("/home");
  };

  handleRescue = () => {
    this.props.history.push("/rescue-home");
  };

  render() {
    return (
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justify="center"
          className="landingPageButtons"
        >
          <Grid item xs={6}>
            <Button
              className="landingPageBtn"
              onClick={this.handleAdopt}
              variant="contained"
              color="primary"
              size="large"
            >
              I am looking to Adopt
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              className="landingPageBtn"
              onClick={this.handleRescue}
              variant="contained"
              color="primary"
              size="large"
            >
              I am a Rescue or Shelter
            </Button>
          </Grid>
        </Grid>
        <Paper variant="outlined" className="mission">
          <Typography variant="h6" gutterBottom>
            Happy Tails Mission
          </Typography>
          <Typography variant="body1">
            Every year thousands of dogs are surrendered to shelters and rescues
            due to behavioral issues. These issues typically stem from improper
            training or knowledge of the breed and temperament of their dog.
            Here at Happy Tails, it is our mission to match available dogs to
            prospective dog owners based on their personal information and
            lifestyle. We hope that by seeing how well one matches the available
            dogs they can make an informed decision when choosing a dog. We want
            every tail to end happily.
          </Typography>
        </Paper>
      </Container>
    );
  }
}

export default LandingPage;
