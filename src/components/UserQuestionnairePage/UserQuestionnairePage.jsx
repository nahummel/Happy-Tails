import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

const styles = {
  root: {
    marginTop: 20,
    marginBottom: 40,
  },
  title: {
    marginTop: 40,
    marginBottom: 30,
  },
  input: {
    marginTop: 20,
    marginBottom: 20,
  },
  btn: {
    marginTop: 10,
    marginRight: 10,
  },
};

class UserQuestionnairePage extends Component {
  state = {
    ...this.props.userQuest,
  };

  handleChecked = (event, property) => {
    if (property === "size") {
      if (event.target.checked) {
        console.log(event.target.name);
        this.setState({
          size: [...this.state.size, event.target.name],
        });
      } else if (event.target.checked === false) {
        let array = [...this.state.size];
        let index = array.indexOf(event.target.name);
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({
            size: array,
          });
        }
      }
    }
    if (property === "age") {
      if (event.target.checked) {
        console.log(event.target.name);
        this.setState({
          age: [...this.state.age, event.target.name],
        });
      } else if (event.target.checked === false) {
        let array = [...this.state.age];
        let index = array.indexOf(event.target.name);
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({
            age: array,
          });
        }
      }
    }
    if (property === "sex") {
      if (event.target.checked) {
        console.log(event.target.name);
        this.setState({
          sex: [...this.state.sex, event.target.name],
        });
      } else if (event.target.checked === false) {
        let array = [...this.state.sex];
        let index = array.indexOf(event.target.name);
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({
            sex: array,
          });
        }
      }
    }
  };

  handleChange = (event, property) => {
    console.log(event.target.value, property);
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

  handleBack = () => {
    this.props.onBack();
  };

  handleNext = () => {
    this.props.dispatch({
      type: "STORE_ANWSERS",
      payload: { ...this.state },
    });
    this.props.onNext();
  };

  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.root} maxWidth="md">
        <Typography variant="h4" className={classes.title}>
          Matching Quesionnaire
        </Typography>
        <div className={classes.input}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">
              What sizes of dog do you prefer?
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.size.includes("Tiny")}
                    onChange={(event) => this.handleChecked(event, "size")}
                    name="Tiny"
                  />
                }
                label="Tiny"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.size.includes("Small")}
                    onChange={(event) => this.handleChecked(event, "size")}
                    name="Small"
                  />
                }
                label="Small"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.size.includes("Medium")}
                    onChange={(event) => this.handleChecked(event, "size")}
                    name="Medium"
                  />
                }
                label="Medium"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.size.includes("Large")}
                    onChange={(event) => this.handleChecked(event, "size")}
                    name="Large"
                  />
                }
                label="Large"
              />
            </FormGroup>
          </FormControl>
        </div>
        <div className={classes.input}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">
              What age of dog do you prefer?
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.age.includes("Young")}
                    onChange={(event) => this.handleChecked(event, "age")}
                    name="Young"
                  />
                }
                label="Young"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.age.includes("Adult")}
                    onChange={(event) => this.handleChecked(event, "age")}
                    name="Adult"
                  />
                }
                label="Adult"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.age.includes("Senior")}
                    onChange={(event) => this.handleChecked(event, "age")}
                    name="Senior"
                  />
                }
                label="Senior"
              />
            </FormGroup>
          </FormControl>
        </div>
        <div className={classes.input}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">
              What gender of dog do you prefer?
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.sex.includes("Male")}
                    onChange={(event) => this.handleChecked(event, "sex")}
                    name="Male"
                  />
                }
                label="Male"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.sex.includes("Female")}
                    onChange={(event) => this.handleChecked(event, "sex")}
                    name="Female"
                  />
                }
                label="Female"
              />
            </FormGroup>
          </FormControl>
        </div>
        <div className={classes.input}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Do you own or rent your home?
            </FormLabel>
            <RadioGroup
              aria-label="rent"
              name="rent1"
              value={String(this.state.rent)}
              onChange={(event) => this.handleChange(event, "rent")}
            >
              <FormControlLabel value="false" control={<Radio />} label="Own" />
              <FormControlLabel value="true" control={<Radio />} label="Rent" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={classes.input}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Do have other dogs at home?
            </FormLabel>
            <RadioGroup
              aria-label="other dogs"
              name="other_dogs"
              value={String(this.state.dogs)}
              onChange={(event) => this.handleChange(event, "dogs")}
            >
              <FormControlLabel value="false" control={<Radio />} label="No" />
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={classes.input}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Do have cats at home?</FormLabel>
            <RadioGroup
              aria-label="cats"
              name="cats"
              value={String(this.state.cats)}
              onChange={(event) => this.handleChange(event, "cats")}
            >
              <FormControlLabel value="false" control={<Radio />} label="No" />
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={classes.input}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Do you live with children?</FormLabel>
            <RadioGroup
              aria-label="kids"
              name="kids"
              value={String(this.state.kids)}
              onChange={(event) => this.handleChange(event, "kids")}
            >
              <FormControlLabel value="false" control={<Radio />} label="No" />
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={classes.input}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Do you like to stay physically active (running, hiking, ect.)?
            </FormLabel>
            <RadioGroup
              aria-label="active"
              name="active"
              value={String(this.state.active)}
              onChange={(event) => this.handleChange(event, "active")}
            >
              <FormControlLabel value="false" control={<Radio />} label="No" />
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={classes.input}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Are you willing to put a lot of time/expense into grooming your
              dog?
            </FormLabel>
            <RadioGroup
              aria-label="grooming"
              name="grooming"
              value={String(this.state.groom)}
              onChange={(event) => this.handleChange(event, "groom")}
            >
              <FormControlLabel value="false" control={<Radio />} label="No" />
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={classes.input}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Do you have experince in training dogs?
            </FormLabel>
            <RadioGroup
              aria-label="training"
              name="training"
              value={String(this.state.train)}
              onChange={(event) => this.handleChange(event, "train")}
            >
              <FormControlLabel value="false" control={<Radio />} label="No" />
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={classes.input}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Are you willing to adopt a dog that has health problems?
            </FormLabel>
            <RadioGroup
              aria-label="training"
              name="health"
              value={String(this.state.health)}
              onChange={(event) => this.handleChange(event, "health")}
            >
              <FormControlLabel value="false" control={<Radio />} label="No" />
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
            </RadioGroup>
          </FormControl>
        </div>

        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          onClick={this.handleBack}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          onClick={this.handleNext}
        >
          Next
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  userQuest: {
    size: [],
    age: [],
    sex: [],
    rent: false,
    dogs: false,
    cats: false,
    kids: false,
    active: false,
    groom: false,
    train: false,
    health: false,
    ...state.userQuest,
  },
  errors: state.errors,
});

export default connect(mapStateToProps)(
  withStyles(styles)(UserQuestionnairePage)
);
