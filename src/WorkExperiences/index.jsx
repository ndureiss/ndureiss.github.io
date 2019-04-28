import React from "react";
import { withMenu } from "../EnrichmentMenu";
import { withTranslation } from "react-i18next";
import GoBackButton from "../Components/GoBackButton";

class WorkExperiences extends React.Component {
	render() {
		return (
			<React.Fragment>
				<GoBackButton />
			</React.Fragment>
		);
	}
}

export default withMenu(withTranslation()(WorkExperiences));
