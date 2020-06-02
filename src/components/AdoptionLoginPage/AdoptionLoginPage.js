import React, { Component } from 'react';
import { connect } from 'react-redux';


class AdoptionLoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  handleLogin = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleBack = () => {
    {this.props.history.push('/')}
  }

  handleSignUp = () => {
    {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderLoginTitle = () => {
  
      if (this.props.location.pathname === '/rescue-home') {
       return(
         'Rescue Login'
       )
      }else {
        return (
          'Adoption Login'
        )
      }
  }

  render() {
    return (
      <div>
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <form onSubmit={this.login}>
          <h1>{this.renderLoginTitle()}</h1>
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
            <button onClick={this.handleLogin}>Login</button>
          </div>
          <div>
            <button onClick={this.handleSignUp}>Sign-Up</button>
          </div>
          <div>
            <button onClick={this.handleBack}>Back</button>
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
  user: state.user,
});

export default connect(mapStateToProps)(AdoptionLoginPage);
