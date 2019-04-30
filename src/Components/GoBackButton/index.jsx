import React from "react";
import { Button } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { withStyles } from "@material-ui/core";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";

const styles = theme => ({
	button: {
		"&:hover": {
			color: theme.palette.secondary.main,
		},
		margin: theme.spacing.unit,
	},
});

class GoBackButton extends React.Component {
	render() {
		const { classes, history, t } = this.props;
		return (
			<React.Fragment>
				<Button onClick={() => history.goBack()} className={classes.button}>
					<ChevronLeftIcon />
					{t("GoBack")}
				</Button>
			</React.Fragment>
		);
	}
}

export default withRouter(withStyles(styles)(withTranslation()(GoBackButton)));
