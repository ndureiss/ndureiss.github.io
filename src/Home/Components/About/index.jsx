import React from "react";
import { CardContent, Typography, Divider, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { withTranslation } from "react-i18next";
import moment from "moment";
import Flag from "react-flagkit";

const styles = theme => {
	return {
		content: {
			margin: theme.spacing.unit,
		},
		flag: {
			width: 50,
		},
	};
};
class About extends React.Component {
	render() {
		const { t, classes } = this.props;
		return (
			<React.Fragment>
				<CardContent>
					<Typography gutterBottom variant="h5">
						{t("About")}
					</Typography>
					<Divider />
					<Typography variant="body1" className={classes.content}>
						{"Nicolas Dureisseix"}
					</Typography>
					<Typography variant="body1" className={classes.content}>
						{`${moment().diff("1996-09-20", "years", false)} ${t("Age")}`}
					</Typography>
					<Typography variant="body1" className={classes.content}>
						{`${t("Live")} Toulouse (France)`}
					</Typography>
					<Typography gutterBottom variant="h6">
						{t("Language")}
					</Typography>
					<Divider />
					<Grid container alignItems="center">
						<Grid item>
							<Flag country="FR" className={classes.flag} />
						</Grid>
						<Grid item>
							<Typography variant="body1" className={classes.content}>
								{t("MotherTongue")}
							</Typography>
						</Grid>
					</Grid>
					<Grid container alignItems="center">
						<Grid item>
							<Flag country="GB" className={classes.flag} />
						</Grid>
						<Grid item>
							<Typography variant="body1" className={classes.content}>
								{`${t("Advanced")} (TOEIC 820)`}
							</Typography>
						</Grid>
					</Grid>
					<Grid container alignItems="center">
						<Grid item>
							<Flag country="DE" className={classes.flag} />
						</Grid>
						<Grid item>
							<Typography variant="body1" className={classes.content}>
								{t("WorkingPro")}
							</Typography>
						</Grid>
					</Grid>
				</CardContent>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(withTranslation()(About));
