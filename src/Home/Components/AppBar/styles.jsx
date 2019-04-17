const styles = theme => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		alignItems: "center",
	},
	toolbar: theme.mixins.toolbar,
	bigAvatar: {
		margin: 10,
		width: 150,
		height: 150,
	},
	title: {
		color: "gainsboro",
	},
});

export default styles;
