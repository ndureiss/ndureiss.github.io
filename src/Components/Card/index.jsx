import React from "react";
import {
	Button,
	Card as MCard,
	CardActionArea,
	CardMedia,
	CardContent as MCardContent,
	CardActions,
	Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { withTranslation } from "react-i18next";

const styles = theme => ({
	card: {
		margin: theme.spacing.unit,
	},
	media: {
		objectFit: "cover",
	},
});

class Card extends React.Component {
	render() {
		const { CardContent, content, img, link, title, t, classes } = this.props;
		return (
			<MCard className={classes.card}>
				<CardActionArea>
					{img && (
						<CardMedia
							component="img"
							alt="Image"
							className={classes.media}
							height="140"
							image={img}
						/>
					)}
					{CardContent ? (
						<CardContent title={title} />
					) : (
						<MCardContent>
							<Typography gutterBottom variant="h5">
								{title || "Content"}
							</Typography>
							<Typography variant="subtitle1">
								{content || "Will come ..."}
							</Typography>
						</MCardContent>
					)}
				</CardActionArea>
				{link && (
					<CardActions>
						<Button size="small" color="primary">
							{t("More")}
						</Button>
					</CardActions>
				)}
			</MCard>
		);
	}
}

export default withStyles(styles)(withTranslation()(Card));
