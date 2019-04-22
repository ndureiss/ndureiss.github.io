import React from "react";
import AppBar from "./Components/AppBar";
import Drawer from "./Components/Drawer";
import styles from "./styles";
import { withTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core";

class EnrichmentMenu extends React.Component {
	render() {
		const { Component, classes, ...props } = this.props;
		return (
			<div className={classes.root}>
				<AppBar />
				<Drawer />
				<main className={classes.content}>
					<Component {...props} />
				</main>
			</div>
		);
	}
}

export const StyledEnrichmentMenu = withStyles(styles)(
	withTranslation()(EnrichmentMenu)
);

export function withMenu(Component) {
	return props => <StyledEnrichmentMenu Component={Component} {...props} />;
}
