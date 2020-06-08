import React, { Component } from "react";
import CreateNewAccount from "../CreateNewAccountPage/CreateNewAccount";
import UserQuestionnaire from "../UserQuestionnairePage/UserQuestionnairePage";
import UserReview from "../UserReviewPage/UserReviewPage";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { withStyles } from "@material-ui/core/styles";


const styles = {
 
};

class RegisterNew extends Component {
  state = {
    componentToShow: "userInfo",
    activeStep: 0,
  };

  handleCreateNewAccountClick = (user) => {
    if (user) {
      this.handleNext();
    } else {
      // register the rescue and go to rescue page
      alert("do the rescue stuff");
    }
  };

  handleShowComponent = (componentToShow) => {
    this.setState({ componentToShow });
  };

  getSteps = () => {
    return ["Personal Information", "Matching Questionnaire", "Review"];
  };

  setActiveStep = (activeStep) => {
    this.setState({ activeStep });
  };

  handleNext = () => {
    this.setActiveStep(this.state.activeStep + 1);
  };

  handleBack = () => {
    this.setActiveStep(this.state.activeStep - 1);
  };

  handleReset = () => {
    this.setActiveStep(0);
  };

  render() {
    const { activeStep } = this.state;
    const steps = this.getSteps();

    return (
      <>
        <div>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div>
          {this.state.activeStep === 0 && (
            <CreateNewAccount onNext={this.handleCreateNewAccountClick} />
          )}
          {this.state.activeStep === 1 && (
            <UserQuestionnaire
              onNext={this.handleNext}
              onBack={this.handleBack}
            />
          )}
          {this.state.activeStep === 2 && (
            <UserReview
              onEditInfo={() =>
                this.setState({
                  activeStep: 0,
                })
              }
              onEditQuiz={() =>
                this.setState({
                  activeStep: 1,
                })
              }
            />
          )}
        </div>
      </>
    );
  }
}

export default withStyles(styles)(RegisterNew);
