import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import logo from "../../logo.svg";

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    objectFit: 'cover',
  },
};

class HomeCard extends React.Component {
  render() {
    const { img, title, content, classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Image"
            className={classes.media}
            height="140"
            image={img || logo}
            title="Beautiful picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title || "Content"}
            </Typography>
            <Typography component="p">
              {content || "Will come ..."}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(HomeCard);