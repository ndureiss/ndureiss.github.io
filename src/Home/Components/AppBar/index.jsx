import React from "react";
import {
	AppBar as MAppBar,
	Avatar,
	Grid,
	Switch,
	Toolbar,
	Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import Profile from "../../../img/profile.jpeg";
import styles from "./styles";
import Flag from "react-flagkit";
import { withTranslation } from "react-i18next";

class AppBar extends React.Component {
	state = {
		switched: true,
	};

	render() {
		const { i18n, t, classes } = this.props;

		const translate = () => event => {
			this.setState({ switched: !this.state.switched });
			event.target.checked
				? i18n.changeLanguage("en")
				: i18n.changeLanguage("fr");
		};

		const centerContainer = {
			container: true,
			alignItems: "center",
		};

		const centerRowContainer = {
			...centerContainer,
			direction: "row",
		};

		const centerColumnContainer = {
			...centerContainer,
			direction: "column",
		};

		return (
			<MAppBar
				position="fixed"
				color="primary"
				className={classes.appBar}
				elevation={5}
			>
				<Toolbar>
					<Grid {...centerRowContainer} justify="space-between">
						<Grid item>
							<Grid {...centerRowContainer} justify="flex-start">
								<Grid item>
									<Avatar src={Profile} className={classes.bigAvatar} />
								</Grid>
								<Grid item>
									<div>
										<Typography variant="h4" className={classes.title}>
											Nicolas Dureisseix
										</Typography>
										<Typography variant="h5" className={classes.title}>
											{t("Title")}
										</Typography>
									</div>
								</Grid>
							</Grid>
						</Grid>
						<Grid item>
							<Grid {...centerColumnContainer} justify="center">
								<Grid item>
									<Grid {...centerRowContainer} justify="center">
										<Grid item>
											<Flag country="FR" className={classes.flag} />
										</Grid>
										<Grid item>
											<Flag country="GB" className={classes.flag} />
										</Grid>
									</Grid>
								</Grid>
								<Grid item>
									<Switch
										checked={this.state.switched}
										onChange={translate()}
									/>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Toolbar>
			</MAppBar>
		);
	}
}

export default withStyles(styles)(withTranslation()(AppBar));
