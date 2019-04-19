import React from "react";
import Card from "../Components/Card";
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

export default withTranslation()(Home);
