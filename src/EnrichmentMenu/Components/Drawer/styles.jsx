const drawerWidth = 65;

const styles = theme => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		marginTop: 170,
	},
	iconHover: {
		"&:hover": {
			color: theme.palette.secondary.main,
		},
	},
});

export default styles;
