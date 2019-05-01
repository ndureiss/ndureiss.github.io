import React from "react";
import GoBackButton from "../Components/GoBackButton";
import ExpansionPanel from "../Components/ExpansionPanel";
import { withMenu } from "../EnrichmentMenu";
import { withTranslation } from "react-i18next";
import TAS from "../img/tas.png";
import IFP from "../img/ifp.png";
import IRIT from "../img/irit.png";
import { Typography } from "@material-ui/core";

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
					img={TAS}
					imgHeight="45px"
					Content={<Typography variant="body2">{t("TASDesc")}</Typography>}
					extras={"TOULOUSE, FRANCE"}
				/>
				<ExpansionPanel
					panel="panel2"
					alwaysOpen
					title={t("IFP")}
					subtitle={`2018 - ${t("Today")}`}
					img={IFP}
					imgHeight="28px"
					Content={<Typography variant="body2">{t("IFPDesc")}</Typography>}
					extras={"MUNICH, ALLEMAGNE"}
				/>
				<ExpansionPanel
					panel="panel3"
					alwaysOpen
					title={t("IRIT")}
					subtitle="2017"
					img={IRIT}
					imgHeight="55px"
					Content={
						<Typography variant="body2">{t("IRITDesc")}</Typography>
					}
					extras={"TOULOUSE, FRANCE"}
				/>
			</React.Fragment>
		);
	}
}

export default withMenu(withTranslation()(WorkExperiences));
