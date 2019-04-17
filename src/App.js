import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const customTheme = createMuiTheme({
	palette: {
		primary: {
			main: "#2F4F4F",
		},
		secondary: {
			main: "#B22222",
		},
	},
});

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider theme={customTheme}>
				<Router basename={process.env.PUBLIC_URL}>
					<CssBaseline />
					<Routes />
				</Router>
			</MuiThemeProvider>
		);
	}
}

export default App;
