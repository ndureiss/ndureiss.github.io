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
import { withRouter } from "react-router-dom";

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
				<CardActionArea disabled>
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
						<Button
							size="small"
							color="primary"
							onClick={_ => this.props.history.push(link)}
						>
							{t("More")}
						</Button>
					</CardActions>
				)}
			</MCard>
		);
	}
}

export default withRouter(withStyles(styles)(withTranslation()(Card)));
