import React from "react";
import AppBar from "./Components/AppBar";
import Drawer from "./Components/Drawer";
import Card from "../Components/Card";
import styles from "./styles";
import { withTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core";

/* TODO : Change this component to HOC */
class EnrichmentMenu extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar />
				<Drawer />
				<main className={classes.content}>
					<Card />
					<Card />
				</main>
			</div>
		);
	}
}

export default withStyles(styles)(withTranslation()(EnrichmentMenu));
