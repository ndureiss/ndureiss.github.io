import React from "react";
import { CardContent, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

class About extends React.Component {
	render() {
		const { title } = this.props;
		return (
			<React.Fragment>
				<CardContent>
					<Typography gutterBottom variant="h5">
						{title || "Content"}
					</Typography>
					<Typography variant="subtitle1">{"Will come ..."}</Typography>
				</CardContent>
			</React.Fragment>
		);
	}
}

export default withStyles()(About);
