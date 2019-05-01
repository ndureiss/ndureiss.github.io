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
});
class ExpansionPanel extends React.Component {
	render() {
		const {
			alwaysOpen = false,
			classes,
			Content,
			expanded,
			extras,
			img,
			imgHeight,
			imgWidth,
			onChange = () => {},
			panel,
			subtitle,
			title,
		} = this.props;
		return (
			<MExpansionPanel
				expanded={expanded === panel || alwaysOpen}
				onChange={onChange(panel)}
				className={classes.panel}
			>
				<ExpansionPanelSummary
					expandIcon={!alwaysOpen && <ExpandMoreIcon />}
				>
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
								<img
									src={img}
									alt="Img"
									style={{
										maxHeight:
											imgHeight || (imgWidth ? "auto" : "32px"),
										maxWidth: imgWidth || "auto",
									}}
								/>
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
