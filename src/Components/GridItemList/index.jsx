import React from "react";
import {
	Grid,
	List,
	ListItem,
	ListItemText,
	Typography,
} from "@material-ui/core";
import { withTranslation } from "react-i18next";

class GridItemList extends React.Component {
	render() {
		const { list, size } = this.props;
		return (
			<Grid item xs={12} sm={6} md={size}>
				<List component="div" disablePadding>
					{list.map(c => (
						<ListItem key={c}>
							<ListItemText>
								<Typography variant="body1">• {c}</Typography>
							</ListItemText>
						</ListItem>
					))}
				</List>
			</Grid>
		);
	}
}

export default withTranslation()(GridItemList);
