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

class MiniJava extends React.Component {
	render() {
		const { i18n, t, classes } = this.props;
		return (
			<CardContent>
				<Grid
					container
					direction="column"
					justify="space-between"
					alignItems="stretch"
					spacing={40}
				>
					<Grid item>
						<Typography gutterBottom variant="h5">
							{t("MiniJava")}
						</Typography>
					</Grid>
					<Divider variant="middle" />
					<Grid item>
						<Typography variant="overline">{t("Overview")}</Typography>
						<Typography variant="body1" align="justify">
							{t("MiniJavaDesc")}
						</Typography>
					</Grid>
					<Grid item>
						<Grid container justify="space-between" alignItems="flex-end">
							<Grid item>
								<Typography variant="overline">
									{t("CodeLanguage")}
								</Typography>
								<Typography variant="body1">
									{"Java, CUP, TAM"}
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="overline">
									{`${t("Teammate")}${
										i18n.language === "en" ? "s" : ""
									}`}
								</Typography>
								<Link {...linkProps("https://benjamin-raymond.pro/")}>
									<Typography
										variant="body1"
										className={classes.link}
										color="primary"
									>
										{"Benjamin Raymond"}
									</Typography>
								</Link>
								<Link
									{...linkProps(
										"https://www.linkedin.com/in/loic-poligny/"
									)}
								>
									<Typography
										variant="body1"
										className={classes.link}
										color="primary"
									>
										{"Loïc Poligny"}
									</Typography>
								</Link>
							</Grid>
							<Grid item>
								<Link
									{...linkProps(
										"https://github.com/7PH/ENSEEIHT-STDL-Mini-Java"
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

export default withStyles(styles)(withTranslation()(MiniJava));
