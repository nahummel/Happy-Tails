import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  link: {
    color: "white",
    padding: 10,
  },
}));

const LogOutButton = (props) => {
  const classes = useStyles();
  return (
    <Typography variant="subtitle1">
      <Link
        href="#"
        className={classes.link}
        onClick={() => props.dispatch({ type: "LOGOUT" })}
      >
        Log Out
      </Link>
    </Typography>
  );
};

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect()(LogOutButton);
