import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = {
  login: {
    margin: 75,
    width: 300,
    padding: "30px 50px 50px",
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

class AdoptionLoginPage extends Component {
  state = {
    username: "",
    password: "",
  };

  handleLogin = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: "LOGIN",
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  handleSignUp = () => {
    {
      this.props.dispatch({ type: "SET_TO_REGISTER_MODE" });
    }
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  renderLoginTitle = () => {
    if (this.props.location.pathname === "/rescue-home") {
      return "Rescue Login";
    } else {
      return "Adoption Login";
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="md">
        <Grid container direction="row" justify="center">
          <Paper variant="outlined" className={classes.login}>
            <form onSubmit={this.login}>
              <Typography variant="h4" className={classes.title} gutterBottom>
                {this.renderLoginTitle()}
              </Typography>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={this.state.username}
                onChange={this.handleInputChangeFor("username")}
                className={classes.input}
                error={this.props.errors.loginMessage !== ""}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                value={this.state.password}
                onChange={this.handleInputChangeFor("password")}
                className={classes.input}
                error={this.props.errors.loginMessage !== ""}
                helperText={this.props.errors.loginMessage}
              />
              <div className={classes.btnContainer}>
                <Button
                  onClick={this.handleSignUp}
                  color="primary"
                  size="medium"
                  className={classes.button}
                >
                  Register
                </Button>
                <Button
                  onClick={this.handleLogin}
                  variant="contained"
                  color="primary"
                  size="medium"
                >
                  Login
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Container>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = (state) => ({
  errors: state.errors,
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(AdoptionLoginPage));
