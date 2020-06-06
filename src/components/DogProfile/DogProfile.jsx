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
  quest: {
    marginTop: 40,
  },
  breadcrumbs: {
    marginTop: 20,
  },
  btn: {
    marginTop: 20,
  },
};

class DogProfile extends Component {
  handleClick = () => {
    this.props.history.push("/rescue-home");
  };

  handleEdit = () => {
    this.props.history.push("/edit-dog");
  };

  render() {
    const { classes, user } = this.props;
    return (
      <>
        <Container maxWidth="lg" className={classes.breadcrumbs}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link component={RouterLink} to={"/rescue-home"}>
              {user.name}
            </Link>
            <Typography color="textPrimary">{this.props.name}</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth="lg" className={classes.root}>
          <Grid container direction="row" alignItems="center" spacing={6}>
            <Grid item xs={12} sm={6} lg={4}>
              <Card>
                <CardMedia
                  className={classes.media}
                  image={this.props.image}
                  title={`${this.props.name} Photo`}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={8}>
              <Typography variant="h3" gutterBottom>
                {this.props.name}
              </Typography>
              <Typography variant="h5">
                <strong>Breed:</strong> {this.props.breed}
              </Typography>
              <Typography variant="h5">
                <strong>Gender:</strong> {this.props.sex}
              </Typography>
              <Typography variant="h5">
                <strong>Age:</strong> {this.props.age} years old
              </Typography>
            </Grid>
          </Grid>
          <div className={classes.info}>
            <Typography variant="h5" gutterBottom>
              Information about {this.props.name}
            </Typography>
            <Typography variant="body1">{this.props.description}</Typography>
          </div>
          <div className={classes.quest}>
            <Typography variant="h5" gutterBottom>
              Matching Questionnaire
            </Typography>
            <Typography variant="body1">
              What is the size of the dog?
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {this.props.size}
            </Typography>
            <Typography variant="body1">
              Is the dog breed considered a bully breed?
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {this.props.rent_breed ? "No" : "Yes"}
            </Typography>
            <Typography variant="body1">
              Do they get along with other dogs?
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {this.props.other_dogs ? "Yes" : "No"}
            </Typography>
            <Typography variant="body1">
              Do they get along with cats?
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {this.props.cats ? "Yes" : "No"}
            </Typography>
            <Typography variant="body1">
              Do they get along with children?
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {this.props.kids ? "Yes" : "No"}
            </Typography>
            <Typography variant="body1">
              Are they hyperactive and require alot of physical activity?
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {this.props.active ? "Yes" : "No"}
            </Typography>
            <Typography variant="body1">
              Do they require alot of grooming?
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {this.props.grooming ? "Yes" : "No"}
            </Typography>
            <Typography variant="body1">
              Are they in need of alot of extra training?
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {this.props.training ? "Yes" : "No"}
            </Typography>
            <Typography variant="body1">
              Do they have any health problems?
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {this.props.health ? "Yes" : "No"}
            </Typography>
          </div>
          <Button
            className={classes.btn}
            component={RouterLink}
            to={"/edit-dog"}
            variant="contained"
            color="primary"
          >
            Edit
          </Button>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.viewDog,
  dispatch: state.dispatch,
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(DogProfile));
