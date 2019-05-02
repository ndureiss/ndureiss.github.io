import React from "react";
import { Divider, Drawer as MDrawer, List } from "@material-ui/core";
import { Mail as MailIcon, Home as HomeIcon } from "@material-ui/icons";
import { withStyles } from "@material-ui/core";
import MenuIcon from "./Components/MenuIcon";
import styles from "./styles";
import { withTranslation } from "react-i18next";
import GithubIcon from "../../../Components/Icons/Github";
import LinkedInIcon from "../../../Components/Icons/LinkedIn";
import RootMeIcon from "../../../Components/Icons/RootMe";

class Drawer extends React.Component {
	render() {
		const { t, classes } = this.props;
		return (
			<React.Fragment>
				<MDrawer
					className={classes.drawer}
					variant="permanent"
					classes={{
						paper: classes.drawerPaper,
					}}
					PaperProps={{
						elevation: 3,
					}}
				>
					<Divider />
					<List>
						<MenuIcon
							tooltip={t("Home")}
							IconComponent={HomeIcon}
							link="/home"
							className={classes.iconHover}
						/>
						<MenuIcon
							tooltip={t("Email")}
							IconComponent={MailIcon}
							link="mailto:nicolas.dureisseix@hotmail.fr"
							className={classes.iconHover}
						/>
						<MenuIcon
							tooltip={t("Github")}
							IconComponent={GithubIcon}
							link="https://github.com/ndureiss"
							className={classes.iconHover}
						/>
						<MenuIcon
							tooltip={t("LinkedIn")}
							IconComponent={LinkedInIcon}
							link="https://www.linkedin.com/in/nicolas-dureisseix"
							className={classes.iconHover}
						/>
						<MenuIcon
							tooltip={t("RootMe")}
							IconComponent={RootMeIcon}
							link="https://www.root-me.org/ndureiss"
							className={classes.iconHover}
						/>
					</List>
				</MDrawer>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(withTranslation()(Drawer));
