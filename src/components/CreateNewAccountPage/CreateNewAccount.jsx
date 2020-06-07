import React, { Component } from 'react';
import {connect} from 'react-redux';
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

class CreateNewAccountPage extends Component {
  state = {
    ...this.props.userInfo
  };

  handleNext = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'STORE_INFO', payload: {...this.state}});
    this.props.onNext(this.state.is_user);
  } // end registerUser

  handleInputChangeFor = property => (event) => {
    if (property === "user") {
      this.setState({
        is_user: !this.state.is_user,
      });
    } else {
      this.setState({
        [property]: event.target.value,
      });
    }

  }

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <header>
          <h3>Create Account</h3>
          <h3>Quesionnaire</h3>
          <h3>Review</h3>
        </header>
        <form>
          <h1>Create A New Account</h1>
          <div>
            <label htmlFor="username">
              Username:
              <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleInputChangeFor('username')}/>
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChangeFor('password')}/>
            </label>
          </div>
          <div>
            <label htmlFor="name">
              Name:
              <input type="text" placeholder="full name" value={this.state.name} onChange={this.handleInputChangeFor('name')}/>
            </label>
          </div>
          <div>
            <label htmlFor="address">
              Address:
              <input type="text" placeholder="street" value={this.state.street} onChange={this.handleInputChangeFor('street')}/>
              <input type="text" placeholder="city" value={this.state.city} onChange={this.handleInputChangeFor('city')}/>
              <input type="text" placeholder="state" value={this.state.state} onChange={this.handleInputChangeFor('state')}/>
              <input type="text" placeholder="zipcode" value={this.state.zipcode} onChange={this.handleInputChangeFor('zipcode')} />
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              Phone:
              <input type="text" placeholder="000-000-0000" value={this.state.phone} onChange={this.handleInputChangeFor('phone')}/>
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              E-mail:
              <input type="text" placeholder="example@gmail.com" value={this.state.email} onChange={this.handleInputChangeFor('email')} />
            </label>
          </div>
          <div>
            <h4>Are you a user or a rescue?</h4>
            <div>
              <label>
                <input type="radio" id="yesUser" checked={this.state.is_user} onChange={this.handleInputChangeFor('user')}></input>
                    User
                </label>
            </div>
            <div>
              <label>
                <input type="radio" id="noUser" checked={!this.state.is_user} onChange={this.handleInputChangeFor('user')}></input>
                  Rescue
              </label>
            </div>
          </div>
          <div>
            <button onClick={this.handleNext}>{this.state.is_user ? "Next" : "Register"}</button>
          </div>
          <div>
            <a href="/landing">Back to Login</a>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: {
    username: '',
    password: '',
    name: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    phone: '',
    email: '',
    is_user: true,
    ...state.userInfo, // override default with any existing user values
  },
  errors: state.errors,
});

export default connect(mapStateToProps)(CreateNewAccountPage);

