import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

const styles = {
  root: {
    marginTop: 20,
    marginBottom: 40,
  },
  media: {
    height: 400,
  },
  info: {
    marginTop: 40,
  },
  breadcrumbs: {
    marginTop: 20,
  },
  btn:{
      marginTop: 20,
  }
};

class AboutMe extends Component {

  render() {
    const { classes, details, rescue } = this.props;

    return (
      <>
        <Container maxWidth="lg" className={classes.breadcrumbs}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link component={RouterLink} to={"/home"}>
              My Matches
            </Link>
            <Typography color="textPrimary">{details.name}</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth="lg" className={classes.root}>
          <Grid container direction="row" alignItems="center" spacing={6}>
            <Grid item xs={12} sm={6} lg={4}>
              <Card>
                <CardMedia
                  className={classes.media}
                  image={details.image}
                  title={`${details.name} Photo`}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={8}>
              <Typography variant="h3" gutterBottom>
                {details.name}
              </Typography>
              <Typography variant="h5">
                <strong>Breed:</strong> {details.breed}
              </Typography>
              <Typography variant="h5">
                <strong>Gender:</strong> {details.sex}
              </Typography>
              <Typography variant="h5">
                <strong>Age:</strong> {details.age} years old
              </Typography>
            </Grid>
          </Grid>
          <div className={classes.info}>
            <Typography variant="h5" gutterBottom>
              Information about {details.name}
            </Typography>
            <Typography variant="body1">{details.description}</Typography>
          </div>
          <div className={classes.info}>
            <Typography variant="h5" gutterBottom>
              Rescue Information
            </Typography>
            <Typography variant="h6" gutterBottom>
              {rescue.name}
            </Typography>
            <Typography variant="body1">{rescue.street}</Typography>
            <Typography variant="body1" gutterBottom>
              {rescue.city}, {rescue.state} {rescue.zipcode}
            </Typography>
            <Typography variant="body1">Phone: {rescue.phone}</Typography>
            <Typography variant="body1">Email: {rescue.email}</Typography>
          </div>
          <Button
            className={classes.btn}
            component={RouterLink}
            to={"/contact-rescue"}
            variant="contained"
            color="primary"
          >
            Contact Rescue
          </Button>
        </Container>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  details: state.viewDog,
  rescue: state.rescue,
  dispatch: state.dispatch,
});
 
export default connect(mapStateToProps)(withStyles(styles)(AboutMe));
