import React from "react";
import GoBackButton from "../Components/GoBackButton";
import ExpansionPanel from "../Components/ExpansionPanel";
import { withMenu } from "../EnrichmentMenu";
import { withTranslation } from "react-i18next";
import TAS from "../img/tas.png";
import IFP from "../img/ifp.png";
import IRIT from "../img/irit.png";
import { Grid, Typography } from "@material-ui/core";

class WorkExperiences extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<React.Fragment>
				<GoBackButton />
				<ExpansionPanel
					panel="panel1"
					alwaysOpen
					title={t("TAS")}
					subtitle={`2019 - ${t("Today")}`}
					Content={
						<Grid container justify="space-between" alignItems="center">
							<Grid item>
								<Typography variant="body2">{t("TASDesc")}</Typography>
							</Grid>
							<Grid item>
								<img
									src={TAS}
									alt="Img"
									style={{ maxWidth: "140px" }}
								/>
							</Grid>
						</Grid>
					}
					extras={"TOULOUSE, FRANCE"}
				/>
				<ExpansionPanel
					panel="panel2"
					alwaysOpen
					title={t("IFP")}
					subtitle={`2018 - ${t("Today")}`}
					Content={
						<Grid container justify="space-between" alignItems="center">
							<Grid item>
								<Typography variant="body2">{t("IFPDesc")}</Typography>
							</Grid>
							<Grid item>
								<img
									src={IFP}
									alt="Img"
									style={{ maxWidth: "140px" }}
								/>
							</Grid>
						</Grid>
					}
					extras={"MUNICH, ALLEMAGNE"}
				/>
				<ExpansionPanel
					panel="panel3"
					alwaysOpen
					title={t("IRIT")}
					subtitle="2017"
					Content={
						<Grid container justify="space-between" alignItems="center">
							<Grid item>
								<Typography variant="body2">{t("IRITDesc")}</Typography>
							</Grid>
							<Grid item>
								<img
									src={IRIT}
									alt="Img"
									style={{ maxHeight: "65px" }}
								/>
							</Grid>
						</Grid>
					}
					extras={"TOULOUSE, FRANCE"}
				/>
			</React.Fragment>
		);
	}
}

export default withMenu(withTranslation()(WorkExperiences));
