import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
    marginBottom: 30,
  },
};

class UserReviewPage extends Component {
  conditionals = (question) => {
    if (question) {
      return <p>Yes</p>;
    } else {
      return <p>No</p>;
    }
  };

  registerUser = () => {
    if (this.props.userInfo.username && this.props.userInfo.password) {
      this.props.dispatch({
        type: "REGISTER",
        payload: {
          ...this.props.userInfo,
          ...this.props.userQuest,
        },
      });
      // this.props.dispatch({ type: 'RESET_ANWSERS' });
      this.props.dispatch({ type: "RESET_INFO" });
    } else {
      this.props.dispatch({ type: "REGISTRATION_INPUT_ERROR" });
    }
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  handleQuizEdit = () => {
    this.props.onEditQuiz();
  };

  handleInfoEdit = () => {
    this.props.onEditInfo();
  };

  render() {
    const { classes, userInfo, userQuest } = this.props;
    return (
      <Container className={classes.root} maxWidth="md">
        <div>
          <Typography variant="h4" className={classes.title}>
            Review Your Responses
          </Typography>
          <Typography variant="h6">Personal Information</Typography>
          <Typography variant="body1">Name:</Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {userInfo.name}
          </Typography>
          <Typography variant="body1">Address:</Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {userInfo.street}
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {userInfo.city}, {userInfo.state} {userInfo.zipcode}
          </Typography>
          <Typography variant="body1">Phone:</Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {userInfo.phone}
          </Typography>
          <Typography variant="body1">E-mail:</Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {userInfo.email}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={this.handleInfoEdit}
          >
            Edit
          </Button>
        </div>
        <div>
          <Typography variant="h6">Matching Questionnaire</Typography>
          <Typography variant="body1">
            What size of dog do you prefer?
          </Typography>
          {userQuest.size.map((size) => {
            return (
              <Typography
                variant="body1"
                color="textSecondary"
                gutterBottom
                key={size}
              >
                {size}
              </Typography>
            );
          })}
          <Typography variant="body1">
            What age of dog do you prefer?
          </Typography>
          {userQuest.age.map((age) => {
            return (
              <Typography
                variant="body1"
                color="textSecondary"
                gutterBottom
                key={age}
              >
                {age}
              </Typography>
            );
          })}
          <Typography variant="body1">
            What gender of dog do you prefer?
          </Typography>
          {userQuest.sex.map((sex) => {
            return (
              <Typography
                variant="body1"
                color="textSecondary"
                gutterBottom
                key={sex}
              >
                {sex}
              </Typography>
            );
          })}
          <Typography variant="body1">Do you rent your home?</Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {userQuest.rent ? "Yes" : "No"}
          </Typography>
          <Typography variant="body1">Do have other dogs at home?</Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {userQuest.dogs ? "Yes" : "No"}
          </Typography>
          <Typography variant="body1">Do have cats at home?</Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {userQuest.cats ? "Yes" : "No"}
          </Typography>
          <Typography variant="body1">Do you live with children?</Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {userQuest.kids ? "Yes" : "No"}
          </Typography>
          <Typography variant="body1">
            Do like to stay physically active (running, hiking, ect.)?
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {userQuest.active ? "Yes" : "No"}
          </Typography>
          <Typography variant="body1">
            Are you willing to put a lot of time/expense into grooming your dog?
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {userQuest.groom ? "Yes" : "No"}
          </Typography>
          <Typography variant="body1">
            Do you have experince in training dogs?
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {userQuest.train ? "Yes" : "No"}
          </Typography>
          <Typography variant="body1">
            Are you willing to adopt a dog that has health problems?
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {userQuest.health ? "Yes" : "No"}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={this.handleQuizEdit}
          >
            Edit
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={this.registerUser}
          >
            Register
          </Button>
        </div>
      </Container>
    );
  }
}

const putStateOnProps = (reduxState) => ({
  userInfo: reduxState.userInfo,
  userQuest: reduxState.userQuest,
});

export default connect(putStateOnProps)(withStyles(styles)(UserReviewPage));
