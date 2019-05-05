import React from "react";
import GoHomeButton from "../Components/GoHomeButton";
import ExpansionPanel from "../Components/ExpansionPanel";
import HighSchool from "./HighSchool";
import Prepa from "./Prepa";
import Engineering from "./Engineering";
import enseeiht from "../img/inp-enseeiht.png";
import TLSSEC from "./TLSSEC";
import tlssec from "../img/tlssec.png";
import { withMenu } from "../EnrichmentMenu";
import { withTranslation } from "react-i18next";
import { Typography, withStyles } from "@material-ui/core";

const styles = theme => {
	return {
		wip: {
			color: theme.palette.secondary.main,
		},
	};
};

class Studies extends React.Component {
	state = {
		expanded: "panel1",
	};

	handleChange = panel => () => {
		this.setState({
			expanded: panel,
		});
	};

	render() {
		const { i18n, t, classes } = this.props;
		return (
			<React.Fragment>
				<GoHomeButton />
				{i18n.language === "en" && (
					<Typography
						variant="button"
						align="center"
						className={classes.wip}
					>
						{t("WIPTrad")}
					</Typography>
				)}
				<ExpansionPanel
					panel="panel1"
					expanded={this.state.expanded}
					onChange={this.handleChange}
					title={t("Master")}
					subtitle="2018-2019"
					img={tlssec}
					Content={<TLSSEC />}
					extras={"TLS-SEC (ENAC, ENSEEIHT, INSA) – TOULOUSE, FRANCE"}
				/>
				<ExpansionPanel
					panel="panel2"
					expanded={this.state.expanded}
					onChange={this.handleChange}
					title={t("Engineer")}
					subtitle="2016-2019"
					img={enseeiht}
					Content={<Engineering />}
					extras={"ENSEEIHT – TOULOUSE, FRANCE"}
				/>
				<ExpansionPanel
					panel="panel3"
					expanded={this.state.expanded}
					onChange={this.handleChange}
					title={t("Prepa")}
					subtitle="2014-2016"
					Content={<Prepa />}
					extras={"Lycée Gay Lussac – LIMOGES, FRANCE"}
				/>
				<ExpansionPanel
					panel="panel4"
					expanded={this.state.expanded}
					onChange={this.handleChange}
					title={t("Bac")}
					subtitle="2014"
					Content={<HighSchool />}
					extras={"Lycée Pierre et Marie Curie – CHÂTEAUROUX, FRANCE"}
				/>
			</React.Fragment>
		);
	}
}

export default withMenu(withStyles(styles)(withTranslation()(Studies)));
