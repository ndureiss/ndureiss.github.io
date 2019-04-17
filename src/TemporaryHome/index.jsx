import React from "react";
import logo from "../logo.svg";
import { withTranslation } from "react-i18next";

class TemporaryHome extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<div className="App">
				<header className="App-header">
					<p>{t("Welcome")}</p>
					<img src={logo} className="App-logo" alt="logo" />
					{t("WIP")}
				</header>
			</div>
		);
	}
}

export default withTranslation()(TemporaryHome);
