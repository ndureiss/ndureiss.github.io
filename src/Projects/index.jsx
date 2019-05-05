import React from "react";
import GoHomeButton from "../Components/GoHomeButton";
import { withMenu } from "../EnrichmentMenu";
import Card from "../Components/Card";
import ProjetLong from "./ProjetLong";
import MiniJava from "./MiniJava";
import { Grid } from "@material-ui/core";
import { withTranslation } from "react-i18next";

const halfWidthCardItem = {
	item: true,
	xs: 12,
	sm: 12,
	md: 6,
};

// TODO : best handle of height
class Projects extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<React.Fragment>
				<GoHomeButton />
				<Grid container>
					<Grid item {...halfWidthCardItem}>
						<Card CardContent={ProjetLong} style={{ height: "95%" }} />
					</Grid>
					<Grid item {...halfWidthCardItem}>
						<Card CardContent={MiniJava} style={{ height: "95%" }} />
					</Grid>
					<Grid item xs={12}>
						<Card title={t("MiniShell")} content={t("MiniShellDesc")} />
					</Grid>
					<Grid item xs={12}>
						<Card title={t("Hidoop")} content={t("HidoopDesc")} />
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}

export default withMenu(withTranslation()(Projects));
