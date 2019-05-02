import React from "react";
import {
	CardContent,
	Typography,
	Divider,
	Link,
	Grid,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { withTranslation } from "react-i18next";
import GithubIcon from "../../Components/Icons/Github";

const styles = theme => {
	return {
		iconHover: {
			"&:hover": {
				color: theme.palette.secondary.main,
			},
		},
	};
};

const linkProps = link => ({
	target: "_blank",
	rel: "noopener noreferrer",
	href: link,
});

class ProjetLong extends React.Component {
	render() {
		const { t, classes } = this.props;
		return (
			<CardContent>
				<Grid
					container
					direction="column"
					justify="space-between"
					alignItems="stretch"
					spacing={32}
				>
					<Grid item>
						<Typography gutterBottom variant="h5">
							{t("ProjetLong")}
						</Typography>
					</Grid>
					<Divider variant="middle" />
					<Grid item>
						<Typography variant="overline">{t("Overview")}</Typography>
						<Typography variant="body1" align="justify">
							{t("SergeyZelenyuk")}
						</Typography>
					</Grid>
					<Grid item>
						<Grid container justify="space-between" alignItems="flex-end">
							<Grid item>
								<Typography variant="overline">
									{t("CodeLanguage")}
								</Typography>
								<Typography variant="body1">{"C"}</Typography>
							</Grid>
							<Grid item>
								<Typography variant="overline">
									{t("Teammate")}
								</Typography>
								<Link {...linkProps("https://cchochoy.github.io")}>
									<Typography
										variant="body1"
										className={classes.link}
										color="primary"
									>
										{"Clément Chochoy"}
									</Typography>
								</Link>
							</Grid>
							<Grid item>
								<Link
									{...linkProps(
										"https://github.com/ndureiss/e1000_vulnerability_exploit"
									)}
								>
									<GithubIcon
										fontSize="large"
										className={classes.iconHover}
									/>
								</Link>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</CardContent>
		);
	}
}

export default withStyles(styles)(withTranslation()(ProjetLong));
