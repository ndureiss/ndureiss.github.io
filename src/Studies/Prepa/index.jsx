import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { withTranslation } from "react-i18next";
import { commonProps } from "../styles";

class Prepa extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<Grid {...commonProps}>
				<Grid item>
					<Typography variant="overline">
						{`${t("FirstYear")} : `}
					</Typography>
					<Typography variant="body1">{t("PrepaSup")}</Typography>
				</Grid>
				<Grid item>
					<Typography variant="overline">
						{`${t("SecondYear")} : `}
					</Typography>
					<Typography variant="body1">{t("PrepaSpe")}</Typography>
				</Grid>
			</Grid>
		);
	}
}

export default withTranslation()(Prepa);
