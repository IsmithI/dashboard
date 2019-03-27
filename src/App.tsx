import * as React from "react";
import "./App.css";
import { ApplicationRouter } from "./router/ApplicationRouter";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./themes";
import { ApplicationContainer } from "./ApplicationContainer";

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
			<ApplicationContainer>
				<ApplicationRouter />
			</ApplicationContainer>
			</MuiThemeProvider>
		);
	}
}

export default App;
