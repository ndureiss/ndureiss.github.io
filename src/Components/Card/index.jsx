import React from "react";
import {
	Button,
	Card as MCard,
	CardActionArea,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { withTranslation } from "react-i18next";
import logo from "../../logo.svg";

const styles = theme => ({
	card: {
		maxWidth: 345,
		margin: theme.spacing.unit,
	},
	media: {
		objectFit: "cover",
	},
});

class Card extends React.Component {
	render() {
		const { img, title, t, content, classes } = this.props;
		return (
			<MCard className={classes.card}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Image"
						className={classes.media}
						height="140"
						image={img || logo}
						title="Beautiful picture"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{title || "Content"}
						</Typography>
						<Typography component="p">
							{content || "Will come ..."}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						{t("More")}
					</Button>
				</CardActions>
			</MCard>
		);
	}
}

export default withStyles(styles)(withTranslation()(Card));
