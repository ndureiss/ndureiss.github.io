import React from "react";
import { Link, ListItem, ListItemIcon, Tooltip } from "@material-ui/core";
import { withRouter } from "react-router-dom";

class MenuIcon extends React.Component {
	render() {
		const { link, tooltip, IconComponent } = this.props;
		return (
			<Link href={link} target={!link.includes("mailto:") ? "_blank" : ""}>
				<ListItem button>
					<Tooltip title={tooltip} placement="right">
						<ListItemIcon>
							<IconComponent fontSize="large" {...this.props} />
						</ListItemIcon>
					</Tooltip>
				</ListItem>
			</Link>
		);
	}
}

export default withRouter(MenuIcon);
