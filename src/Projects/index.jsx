import React from "react";
import GoBackButton from "../Components/GoBackButton";
import { Typography } from "@material-ui/core";
import { withMenu } from "../EnrichmentMenu";
import { withTranslation } from "react-i18next";

class Projects extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<React.Fragment>
				<GoBackButton />
				<Typography variant="body2">{t("WIP")}</Typography>
			</React.Fragment>
		);
	}
}

export default withMenu(withTranslation()(Projects));
