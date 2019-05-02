import React from "react";
import GoBackButton from "../Components/GoBackButton";
import { withMenu } from "../EnrichmentMenu";
import Card from "../Components/Card";
import ProjetLong from "./ProjetLong";
import { Grid } from "@material-ui/core";

const halfWidthCardItem = {
	item: true,
	xs: 12,
	sm: 12,
	md: 6,
};

class Projects extends React.Component {
	render() {
		return (
			<React.Fragment>
				<GoBackButton />
				<Grid container>
					<Grid item {...halfWidthCardItem}>
						<Card CardContent={ProjetLong} />
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}

export default withMenu(Projects);
