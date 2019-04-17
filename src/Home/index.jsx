import React from "react";
import HomeCard from "../Components/HomeCard";
import AppBar from "./Components/AppBar";
import Drawer from "./Components/Drawer";
import styles from "./styles";
import { withTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core";

class Home extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar />
				<Drawer />
				<main className={classes.content}>
					<HomeCard />
				</main>
			</div>
		);
	}
}

export default withStyles(styles)(withTranslation()(Home));
