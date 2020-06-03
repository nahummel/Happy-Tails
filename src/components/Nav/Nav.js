import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <Link to={!props.user.is_user ? '/rescue-home' : '/home'}>
      <h2 className="nav-title">Happy Tails</h2>
    </Link>
    <div className="nav-right">
      <Link className="nav-link" to={!props.user.is_user ? '/rescue-home' : '/home'}>
        Home
      </Link>
      {props.user.id && (
        <>
          <Link className="nav-link" to={!props.user.is_user ? '/rescue-profile' : '/user-profile'}>
            Profile
          </Link>
          <LogOutButton className="nav-link"/>
        </>
      )}
      {/* Always show this link since the about page is not protected */}
      <Link className="nav-link" to="/about">
        About
      </Link>
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
