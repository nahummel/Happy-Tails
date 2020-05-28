import React, { Component } from 'react';
import {connect} from 'react-redux';

class CreateNewAccountPage extends Component {
  state = {
    username: '',
    password: '',
    f_name:'',
    l_name:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    phone:'',
    email:'',
  };

  handleNext = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'STORE_INFO',
        payload: {
          username: this.state.username,
          password: this.state.password,
          f_name: this.state.f_name,
          l_name: this.state.l_name,
          street: this.state.street,
          city: this.state.city,
          state: this.state.state,
          zipcode: this.state.zipcode,
          phone: this.state.phone,
          email: this.state.email
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
    this.props.history.push('/userquestionnaire')
  } // end registerUser

  handleInputChangeFor = property => (event) => {
    this.setState({
      [property]: event.target.value,
    });
  }

  handleBack = () => {
    this.props.history.push('/adoptionlogin')
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
              <input type="text" placeholder="first" value={this.state.f_name} onChange={this.handleInputChangeFor('f_name')}/>
              <input type="text" placeholder="last" value={this.state.l_name} onChange={this.handleInputChangeFor('l_name')}/>
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
            <button onClick={this.handleNext}>Next</button>
          </div>
          <div>
            <button onClick={this.handleBack}>Back to Login</button>
          </div>
        </form>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(CreateNewAccountPage);

