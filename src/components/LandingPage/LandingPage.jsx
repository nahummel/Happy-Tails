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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor
            neque vitae tempus quam pellentesque nec. Sodales ut eu sem integer
            vitae justo eget magna fermentum. Tristique risus nec feugiat in
            fermentum posuere urna nec tincidunt. Est sit amet facilisis magna
            etiam tempor. Dui vivamus arcu felis bibendum. Eget lorem dolor sed
            viverra ipsum nunc aliquet bibendum enim. Euismod quis viverra nibh
            cras pulvinar mattis. Aliquet bibendum enim facilisis gravida neque
            convallis a cras. Sit amet nisl suscipit adipiscing bibendum est
            ultricies integer.
          </Typography>
        </Paper>
      </Container>
    );
  }
}

export default LandingPage;
