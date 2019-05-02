import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../Home";
import TemporaryHome from "../TemporaryHome";
import Studies from "../Studies";
import WorkExperiences from "../WorkExperiences";
import Projects from "../Projects";

class NoMatch extends React.Component {
	render() {
		return <Redirect to="/" />;
	}
}

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={TemporaryHome} />
				<Route exact path="/home" component={Home} />
				<Route exact path="/studies" component={Studies} />
				<Route exact path="/work" component={WorkExperiences} />
				<Route exact path="/projects" component={Projects} />
				<Route component={() => <Redirect to="/" />} />
			</Switch>
		);
	}
}

export default Routes;
