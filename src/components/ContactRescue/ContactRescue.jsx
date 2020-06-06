import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";

const dotenv = require("dotenv");
dotenv.config();

const styles = {
  contact: {
    margin: 75,
    width: 500,
    padding: "30px 50px 50px",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    display: "block",
    marginBottom: 15,
  },
  btnContainer: {
    textAlign: "right",
  },
  button: {
    marginRight: 15,
  },
};

class ContactRescue extends Component {
  state = {
    reciever: this.props.rescue.email,
    sender: this.props.user.email,
    emailText: `Hi, my name is ${this.props.user.name}, and I am interested in learning more about ${this.props.dog.name}.`,
  };

  handleBack = () => {
    this.props.history.goBack();
  };

  handleChange = (event, property) => {
    switch (property) {
      case "emailText":
        return this.setState({
          [property]: event.target.value,
        });
      default:
        return this.state;
    }
  };

  handleClick = () => {
    this.props.dispatch({ type: "SEND_MAIL", payload: this.state });
    this.props.history.goBack();
  };

  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="md">
        <Grid container direction="row" justify="center">
          <Paper variant="outlined" className={classes.contact}>
            <Typography variant="h4" className={classes.title}>
              Contact {this.props.rescue.name}
            </Typography>
            <TextField
              value={this.state.emailText}
              variant="outlined"
              className={classes.input}
              fullWidth
              multiline
              rows={7}
              onChange={(event) => this.handleChange(event, "emailText")}
            />
            <div className={classes.btnContainer}>
              <Button
                color="primary"
                size="medium"
                className={classes.button}
                onClick={this.handleBack}
              >
                Cancel
              </Button>
              <Button
                onClick={this.handleClick}
                variant="contained"
                color="primary"
                size="medium"
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </div>
          </Paper>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  rescue: state.rescue,
  dog: state.viewDog,
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(withStyles(styles)(ContactRescue));
