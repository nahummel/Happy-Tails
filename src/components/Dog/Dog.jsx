import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
};

class Dog extends Component {
  handleClick = () => {
    this.props.dispatch({ type: "STORE_DOG", payload: this.props.dog });
    this.props.dispatch({
      type: "FETCH_RESCUE",
      payload: this.props.dog.rescue_id,
    });
    this.props.history.push("/about-me");
  };

  calculate = () => {
    let totalMatches = 0;
    const total = 11;
    for (let size of this.props.userQuest.size) {
      if (size === this.props.dog.size) {
        totalMatches++;
      }
    }
    for (let age of this.props.userQuest.age_range) {
      if (age === this.props.dog.age_range) {
        totalMatches++;
      }
    }
    for (let sex of this.props.userQuest.sex) {
      if (sex === this.props.dog.sex) {
        totalMatches++;
      }
    }
    if (
      this.props.userQuest.rent_breed === this.props.dog.rent_breed ||
      !this.props.userQuest.rent_breed
    ) {
      totalMatches++;
    }
    if (
      this.props.userQuest.other_dogs === this.props.dog.other_dogs ||
      !this.props.userQuest.other_dogs
    ) {
      totalMatches++;
    }
    if (
      this.props.userQuest.cats === this.props.dog.cats ||
      !this.props.userQuest.cats
    ) {
      totalMatches++;
    }
    if (
      this.props.userQuest.kids === this.props.dog.kids ||
      !this.props.userQuest.kids
    ) {
      totalMatches++;
    }
    if (this.props.userQuest.grooming === this.props.dog.grooming) {
      totalMatches++;
    }
    if (this.props.userQuest.active === this.props.dog.active) {
      totalMatches++;
    }
    if (this.props.userQuest.training === this.props.dog.training) {
      totalMatches++;
    }
    if (this.props.userQuest.health === this.props.dog.health) {
      totalMatches++;
    }

    return Math.round((totalMatches / total) * 100);
  };

  render() {
    const { classes, dog } = this.props;
    return (
      <Card className={classes.root} onClick={this.handleClick}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={dog.image}
            title={`${dog.name} Photo`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {dog.name}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              {this.calculate()}% Matching
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

// this allows us to use <App /> in index.js
export default withStyles(styles)(Dog);
