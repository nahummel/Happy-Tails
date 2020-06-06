import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = {
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
  actions: {
    justifyContent: "space-between",
    paddingLeft: 20,
  },
};

class AdoptDog extends Component {
  handleClick = () => {
    this.props.dispatch({ type: "STORE_DOG", payload: this.props.dog });
    this.props.history.push("/dog-profile");
  };

  handleDelete = () => {
    console.log(this.props.dog.id);
    this.props.dispatch({
      type: "DELETE_DOG",
      payload: [this.props.dog.dog_id, this.props.dog.rescue_id],
    });
  };

  render() {
    const { classes, dog } = this.props;
    return (
      <>
        <Card>
          <CardActionArea onClick={this.handleClick}>
            <CardMedia
              className={classes.media}
              image={dog.image}
              title={`${dog.name} Photo`}
            />
          </CardActionArea>
          <CardActions className={classes.actions}>
            <Typography variant="h5">{dog.name}</Typography>
            <IconButton
              aria-label="delete"
              onClick={this.handleDelete}
              className={classes.margin}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </CardActions>
        </Card>
      </>
    );
  }
}

export default withStyles(styles)(AdoptDog);
