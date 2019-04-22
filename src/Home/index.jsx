import React from "react";
import Card from "../Components/Card";
import { withMenu } from "../EnrichmentMenu";
import { withTranslation } from "react-i18next";

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Card />
				<Card />
			</React.Fragment>
		);
	}
}

export default withMenu(withTranslation()(Home));
