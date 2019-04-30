import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { withTranslation } from "react-i18next";
import { commonProps } from "../styles";

// TODO : Ajouter le contenu des cours
class TLSSEC extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<Grid {...commonProps}>
				<Grid item>
					<Typography variant="body1">{t("WIP")}</Typography>
				</Grid>
			</Grid>
		);
	}
}

export default withTranslation()(TLSSEC);
