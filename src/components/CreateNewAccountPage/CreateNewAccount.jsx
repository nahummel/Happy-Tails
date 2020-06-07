import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const styles = {
  root: {
    marginTop: 20,
    marginBottom: 40,
  },
  input: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    justifyContent: "space-between",
  },
  column: {
    flexGrow: 1,
    marginRight: 10,
  },
  btn: {
    marginTop: 10,
    marginRight: 10,
  },
  title: {
    marginTop: 40,
    marginBottom: 30,
  },
};

class CreateNewAccountPage extends Component {
  state = {
    ...this.props.userInfo,
  };

  handleBackLogin = () => {
    this.props.dispatch({ type: "SET_TO_LOGIN_MODE" });
  };

  handleNext = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: "STORE_INFO", payload: { ...this.state } });
    this.props.onNext(this.state.is_user);
  }; // end registerUser

  handleInputChangeFor = (property) => (event) => {
    if (event.target.value === "true" || event.target.value === "false") {
      this.setState({
        [property]: event.target.value === "true",
      });
    } else {
      this.setState({
        [property]: event.target.value,
      });
    }
  };

  disableBtn = () => {
    for (let value of Object.values(this.state)) {
      if (value === "") {
        return true;
      }
    }
    return false;
  };

  render() {
    const { classes } = this.props;
    const buttonDisabled = this.disableBtn();

    return (
      <Container className={classes.root} maxWidth="md">
        {this.props.errors.registrationMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <Typography variant="h4" className={classes.title}>
          Create A New Account
        </Typography>
        <div className={classes.input}>
          <TextField
            id="outlined-basic"
            className={classes.column}
            label="Username"
            variant="outlined"
            value={this.state.username}
            onChange={this.handleInputChangeFor("username")}
          />
          <TextField
            className={classes.column}
            id="outlined-basic"
            type="password"
            label="Password"
            variant="outlined"
            value={this.state.password}
            onChange={this.handleInputChangeFor("password")}
          />
        </div>
        <div className={classes.input}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Are you looking to adopt or part of a rescue?
            </FormLabel>
            <RadioGroup
              aria-label="user/rescue"
              name="user/rescue"
              defaultValue={String(this.state.is_user)}
              onChange={this.handleInputChangeFor("is_user")}
            >
              <FormControlLabel
                value="true"
                control={<Radio />}
                label="Looking to Adopt"
              />
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="Rescue"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <Typography variant="h6">Contact Information</Typography>
        <div className={classes.input}>
          <TextField
            id="outlined-basic"
            label={this.state.is_user ? "Full Name" : "Rescue Name"}
            fullWidth
            variant="outlined"
            value={this.state.name}
            onChange={this.handleInputChangeFor("name")}
          />
        </div>
        <div className={classes.input}>
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            className={classes.column}
            value={this.state.email}
            onChange={this.handleInputChangeFor("email")}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            value={this.state.phone}
            onChange={this.handleInputChangeFor("phone")}
          />
        </div>
        <Typography variant="h6">Address</Typography>
        <div className={classes.input}>
          <TextField
            id="outlined-basic"
            label="Street"
            fullWidth
            variant="outlined"
            value={this.state.street}
            onChange={this.handleInputChangeFor("street")}
          />
        </div>
        <div className={classes.input}>
          <TextField
            className={classes.column}
            id="outlined-basic"
            label="City"
            variant="outlined"
            value={this.state.city}
            onChange={this.handleInputChangeFor("city")}
          />
          <TextField
            className={classes.column}
            id="outlined-basic"
            label="State"
            variant="outlined"
            value={this.state.state}
            onChange={this.handleInputChangeFor("state")}
          />
          <TextField
            id="outlined-basic"
            label="Zipcode"
            variant="outlined"
            value={this.state.zipcode}
            onChange={this.handleInputChangeFor("zipcode")}
          />
        </div>

        <div>
          <Button
            color="primary"
            onClick={this.handleBackLogin}
            className={classes.btn}
          >
            Back to Login
          </Button>
          <Button
            disabled={buttonDisabled}
            className={classes.btn}
            onClick={this.handleNext}
            variant="contained"
            color="primary"
          >
            {this.state.is_user ? "Next" : "Register"}
          </Button>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: {
    username: "",
    password: "",
    name: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
    email: "",
    is_user: true,
    ...state.userInfo, // override default with any existing user values
  },
  errors: state.errors,
});

export default connect(mapStateToProps)(
  withStyles(styles)(CreateNewAccountPage)
);
