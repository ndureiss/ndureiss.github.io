import React from "react";
import {
	ExpansionPanel as MExpansionPanel,
	ExpansionPanelDetails,
	ExpansionPanelSummary,
	Typography,
	Grid,
	ExpansionPanelActions,
	Divider,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
	panel: {
		margin: theme.spacing.unit * 0.6,
	},
	img: {
		maxHeight: "32px",
	},
});
class ExpansionPanel extends React.Component {
	render() {
		const {
			classes,
			Content,
			expanded,
			extras,
			img,
			onChange,
			panel,
			subtitle,
			title,
		} = this.props;
		return (
			<MExpansionPanel
				expanded={expanded === panel}
				onChange={onChange(panel)}
				className={classes.panel}
			>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Grid container justify="space-between">
						<Grid item>
							<Grid
								container
								justify="center"
								alignItems="baseline"
								spacing={16}
							>
								<Grid item>
									<Typography variant="h6">
										{title || "Title"}
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant="overline">
										{subtitle || "subTitle"}
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						{img && (
							<Grid item>
								<img src={img} alt="Img" className={classes.img} />
							</Grid>
						)}
					</Grid>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>{Content}</ExpansionPanelDetails>
				{extras && (
					<div>
						<Divider />
						<ExpansionPanelActions>
							<Typography variant="overline">{extras}</Typography>
						</ExpansionPanelActions>
					</div>
				)}
			</MExpansionPanel>
		);
	}
}

export default withStyles(styles)(ExpansionPanel);
