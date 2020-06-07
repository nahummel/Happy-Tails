import React from "react";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import LogOutButton from "../LogOutButton/LogOutButton";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
  link: {
    color: "white",
    padding: 10,
  },
}));

const Nav = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <Link className={classes.title} component={RouterLink} to={"/"}>
              Happy Tails
            </Link>
          </Typography>

          <Typography variant="subtitle1">
            <Link
              className={classes.link}
              component={RouterLink}
              to={!props.user.is_user ? "/rescue-home" : "/home"}
            >
              Home
            </Link>
          </Typography>
          {/* Always show this link since the about page is not protected */}
          <Typography variant="subtitle1">
            <Link className={classes.link} component={RouterLink} to="/about">
              About
            </Link>
          </Typography>
          {props.user.id && (
            <>
              <Typography variant="subtitle1">
                <Link
                  className={classes.link}
                  component={RouterLink}
                  to={!props.user.is_user ? "/rescue-profile" : "/user-profile"}
                >
                  Profile
                </Link>
              </Typography>
              <LogOutButton className="nav-link" />
            </>
          )}
          {/* Always show this link since the about page is not protected */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
