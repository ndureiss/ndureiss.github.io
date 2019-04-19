import Background from "../../../img/background.jpg";

const styles = theme => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		backgroundImage: `url(${Background})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
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
	flag: {
		flexGrow: 1,
		width: 50,
	},
});

export default styles;
