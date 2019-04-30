import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { withTranslation } from "react-i18next";
import { commonProps } from "../styles";

class HighSchool extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<Grid {...commonProps}>
				<Grid item>
					<Typography variant="body1">{t("BacOpt")}</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1">{t("BacHonors")}</Typography>
				</Grid>
			</Grid>
		);
	}
}

export default withTranslation()(HighSchool);
