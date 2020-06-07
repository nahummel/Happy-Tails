import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
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
  },
  btn: {
    marginTop: 10,
  },
};

class AddDog extends Component {
  state = {
    name: "",
    image: "",
    description: "",
    breed: "",
    sex: "",
    age: "",
    rescue_id: this.props.user.id,
    size: "",
    age_range: "",
  };

  createTestDog = () => {
    this.setState({
      name: "Woodhouse",
      image:
        "https://www.allthingsdogs.com/wp-content/uploads/2020/01/Boston-Terrier-Feature.jpg",
      description: "Loves Cheese",
      breed: "Boston Terrier",
      sex: "Male",
      age: "5",
      rescue_id: this.props.user.id,
      size: "Small",
      age_range: "adult",
      rent: true,
      dogs: true,
      cats: false,
      kids: true,
      active: false,
      groom: false,
      train: false,
      health: false,
    });
  };

  handleInputChangeFor = (property) => (event) => {
    this.setState({
      [property]: event.target.value,
    });
    if (property === "age") {
      if (event.target.value <= 2) {
        this.setState({
          age_range: "young",
        });
      } else if (event.target.value <= 6) {
        this.setState({
          age_range: "adult",
        });
      } else if (event.target.value > 6) {
        this.setState({
          age_range: "senior",
        });
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

  handleAddDog = () => {
    this.props.dispatch({ type: "POST_DOG", payload: { ...this.state } });
    this.props.history.push("/rescue-home");
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Container maxWidth="lg" className={classes.root}>
          <Typography
            variant="h4"
            gutterBottom
            onDoubleClick={this.createTestDog}
          >
            Edit Profile
          </Typography>
          <Typography variant="h5" gutterBottom>
            Personal Information
          </Typography>
          <div className={classes.input}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={this.state.name}
              onChange={this.handleInputChangeFor("name")}
            />
          </div>
          <div className={classes.input}>
            <TextField
              id="outlined-basic"
              label="Breed"
              variant="outlined"
              value={this.state.breed}
              onChange={this.handleInputChangeFor("breed")}
            />
          </div>
          <div className={classes.input}>
            <TextField
              id="outlined-basic"
              label="Age"
              variant="outlined"
              value={this.state.age}
              onChange={this.handleInputChangeFor("age")}
            />
          </div>
          <div className={classes.input}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="sex"
                name="sex1"
                value={this.state.sex}
                onChange={(event) => this.handleChange(event, "sex")}
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className={classes.input}>
            <TextField
              id="outlined-basic"
              label="Image URL"
              variant="outlined"
              fullWidth
              value={this.state.image}
              onChange={this.handleInputChangeFor("image")}
            />
          </div>
          <div className={classes.input}>
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              multiline
              rows={5}
              fullWidth
              value={this.state.description}
              onChange={this.handleInputChangeFor("description")}
            />
          </div>
          <Typography variant="h5" gutterBottom>
            Matching Quesionnaire
          </Typography>
          <div className={classes.input}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                What is the size of the dog?
              </FormLabel>

              <RadioGroup
                aria-label="size"
                name="size1"
                value={this.state.size}
                onChange={(event) => this.handleChange(event, "size")}
              >
                <FormControlLabel
                  value="Tiny"
                  control={<Radio />}
                  label="Tiny"
                />
                <FormControlLabel
                  value="Small"
                  control={<Radio />}
                  label="Small"
                />
                <FormControlLabel
                  value="Medium"
                  control={<Radio />}
                  label="Medium"
                />
                <FormControlLabel
                  value="Large"
                  control={<Radio />}
                  label="Large"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className={classes.input}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Is the dog breed considered a bully breed?
              </FormLabel>
              <RadioGroup
                aria-label="rent"
                name="rent1"
                value={String(this.state.rent)}
                onChange={(event) => this.handleChange(event, "rent")}
              >
                <FormControlLabel value="true" control={<Radio />} label="No" />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="Yes"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className={classes.input}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Do they get along with other dogs?
              </FormLabel>
              <RadioGroup
                aria-label="other dogs"
                name="other_dogs"
                value={String(this.state.dogs)}
                onChange={(event) => this.handleChange(event, "dogs")}
              >
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Yes"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className={classes.input}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Do they get along with cats?
              </FormLabel>
              <RadioGroup
                aria-label="cats"
                name="cats"
                value={String(this.state.cats)}
                onChange={(event) => this.handleChange(event, "cats")}
              >
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Yes"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className={classes.input}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Do they get along with children?
              </FormLabel>
              <RadioGroup
                aria-label="kids"
                name="kids"
                value={String(this.state.kids)}
                onChange={(event) => this.handleChange(event, "kids")}
              >
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Yes"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className={classes.input}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Are they hyperactive and require alot of physical activity?
              </FormLabel>
              <RadioGroup
                aria-label="active"
                name="active"
                value={String(this.state.active)}
                onChange={(event) => this.handleChange(event, "active")}
              >
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Yes"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className={classes.input}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Do they require alot of grooming?
              </FormLabel>
              <RadioGroup
                aria-label="grooming"
                name="grooming"
                value={String(this.state.groom)}
                onChange={(event) => this.handleChange(event, "groom")}
              >
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Yes"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className={classes.input}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Are they in need of alot of extra training?
              </FormLabel>
              <RadioGroup
                aria-label="training"
                name="training"
                value={String(this.state.train)}
                onChange={(event) => this.handleChange(event, "train")}
              >
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Yes"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className={classes.input}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Do they have any health problems?
              </FormLabel>
              <RadioGroup
                aria-label="training"
                name="health"
                value={String(this.state.health)}
                onChange={(event) => this.handleChange(event, "health")}
              >
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Yes"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleAddDog}
              className={classes.btn}
            >
              Add Dog
            </Button>
          </div>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  dogs: state.dogs,
  dispatch: state.dispatch,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(AddDog));
