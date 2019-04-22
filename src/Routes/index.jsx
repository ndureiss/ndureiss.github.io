import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home";
import TemporaryHome from "../TemporaryHome";

class Routes extends React.Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={TemporaryHome} />
				<Route exact path="/home" component={Home} />
			</div>
		);
	}
}

export default Routes;
