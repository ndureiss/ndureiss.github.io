import React from "react";
import { Route } from "react-router-dom";
import EnrichmentMenu from "../EnrichmentMenu";
import TemporaryHome from "../TemporaryHome";

class Routes extends React.Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={TemporaryHome} />
				<Route exact path="/home" component={EnrichmentMenu} />
			</div>
		);
	}
}

export default Routes;
