import * as React from "react";
import "./App.css";
import { ApplicationRouter } from "./router/ApplicationRouter";
import { MuiThemeProvider } from "@material-ui/core";
import { yelli as theme } from "./themes";
import { ApplicationContainer } from "./ApplicationContainer";
import { Provider as Mobx } from 'mobx-react'
import { stores } from "./stores";

class App extends React.Component {
	render() {
		return (
			<Mobx {...stores}>
				<MuiThemeProvider theme={theme}>
					<ApplicationContainer>
						<ApplicationRouter />
					</ApplicationContainer>
				</MuiThemeProvider>
			</Mobx>
		);
	}
}

export default App;
