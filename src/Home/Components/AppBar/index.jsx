import React from "react";
import {
	AppBar as MAppBar,
	Avatar,
	Toolbar,
	Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import Profile from "../../../img/profile.jpeg";
import styles from "./styles";
import { withTranslation } from "react-i18next";

class AppBar extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<MAppBar
				position="fixed"
				color="primary"
				className={classes.appBar}
				elevation={5}
			>
				<Toolbar>
					<Avatar src={Profile} className={classes.bigAvatar} />
					<div>
						<Typography variant="h4" className={classes.title}>
							Nicolas Dureisseix
						</Typography>
						<Typography variant="h5" className={classes.title}>
							Junior Engineer in Cybersecurity
						</Typography>
					</div>
				</Toolbar>
			</MAppBar>
		);
	}
}

export default withStyles(styles)(withTranslation()(AppBar));
