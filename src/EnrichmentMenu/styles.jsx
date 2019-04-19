const styles = theme => ({
	root: {
		display: "flex",
	},
	content: {
		marginTop: 170,
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},
	drawer: {
		width: 65,
		flexShrink: 0,
	},
	drawerPaper: {
		width: 65,
		marginTop: 170,
	},
});

export default styles;
