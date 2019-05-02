import React from "react";
import GoBackButton from "../Components/GoBackButton";
import { withMenu } from "../EnrichmentMenu";
import Card from "../Components/Card";
import ProjetLong from "./ProjetLong";
import MiniJava from "./MiniJava";
import { Grid } from "@material-ui/core";

const halfWidthCardItem = {
	item: true,
	xs: 12,
	sm: 12,
	md: 6,
};

// TODO : best handle of height
class Projects extends React.Component {
	render() {
		return (
			<React.Fragment>
				<GoBackButton />
				<Grid container>
					<Grid item {...halfWidthCardItem}>
						<Card CardContent={ProjetLong} style={{ height: "100%" }} />
					</Grid>
					<Grid item {...halfWidthCardItem}>
						<Card CardContent={MiniJava} style={{ height: "100%" }} />
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}

export default withMenu(Projects);
