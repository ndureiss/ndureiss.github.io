import React from "react";
import {
	Collapse,
	Grid,
	ListItem,
	ListItemText,
	Typography,
} from "@material-ui/core";
import {
	ExpandLess as ExpandLessIcon,
	ExpandMore as ExpandMoreIcon,
} from "@material-ui/icons";

const containerProps = {
	container: true,
	direction: "row",
	alignItems: "center",
	justify: "space-between",
};

class CollapseListItem extends React.Component {
	render() {
		const { caption, children, text, onClick, open } = this.props;
		return (
			<React.Fragment>
				{caption && <Typography variant="overline">{caption}</Typography>}
				<ListItem
					button={children ? true : false}
					onClick={onClick}
					selected={open}
				>
					<ListItemText>
						<Typography variant="body1">{text}</Typography>
					</ListItemText>
					{open ? <ExpandLessIcon /> : children && <ExpandMoreIcon />}
				</ListItem>
				{children && (
					<Collapse in={open} timeout="auto">
						<Grid {...containerProps}>{children}</Grid>
					</Collapse>
				)}
			</React.Fragment>
		);
	}
}

export default CollapseListItem;
