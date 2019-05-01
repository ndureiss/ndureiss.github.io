import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home";
import TemporaryHome from "../TemporaryHome";
import Studies from "../Studies";
import WorkExperiences from "../WorkExperiences";
import Projects from "../Projects";

class Routes extends React.Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={TemporaryHome} />
				<Route exact path="/home" component={Home} />
				<Route exact path="/studies" component={Studies} />
				<Route exact path="/work" component={WorkExperiences} />
				<Route exact path="/projects" component={Projects} />
			</div>
		);
	}
}

export default Routes;