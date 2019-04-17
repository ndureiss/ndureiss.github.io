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
	flag: {
		flexGrow: 1,
		padding: "2px",
	},
});

export default styles;
