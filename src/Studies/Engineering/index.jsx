import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { withTranslation } from "react-i18next";
import { commonProps } from "../styles";

// TODO : Ajouter le contenu des cours
class EngineeringSchool extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<Grid {...commonProps}>
				<Grid item>
					<Typography variant="overline">
						{`${t("FirstYear")} : `}
					</Typography>
					<Typography variant="body1">{t("IMA")}</Typography>
				</Grid>
				<Grid item>
					<Typography variant="overline">
						{`${t("SecondYear2")} : `}
					</Typography>
					<Typography variant="body1">
						{`${t("IMA")}, ${t("IMAOpt")}`}
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant="overline">
						{`${t("ThirdYear")} : `}
					</Typography>
					<Typography variant="body1">{t("TLSSEC")}</Typography>
				</Grid>
			</Grid>
		);
	}
}

export default withTranslation()(EngineeringSchool);
