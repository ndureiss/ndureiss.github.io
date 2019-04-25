import React from "react";
import { CardContent, Typography, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { withTranslation } from "react-i18next";
import moment from "moment";

const styles = theme => {
	return {
		content: {
			margin: theme.spacing.unit,
		},
	};
};
class About extends React.Component {
	render() {
		const { title, t, classes } = this.props;
		return (
			<React.Fragment>
				<CardContent>
					<Typography gutterBottom variant="h5">
						{title || "Content"}
					</Typography>
					<Divider />
					<Typography variant="body1" className={classes.content}>
						{"Nicolas Dureisseix"}
					</Typography>
					<Typography variant="body1" className={classes.content}>
						{`${moment().diff("1996-09-20", "years", false)} ${t("Age")}`}
					</Typography>
					<Typography variant="body1" className={classes.content}>
						{"More will come ..."}
					</Typography>
				</CardContent>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(withTranslation()(About));
