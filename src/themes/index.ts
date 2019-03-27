import { createMuiTheme } from "@material-ui/core";
import { amber } from "@material-ui/core/colors";

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: amber[400]
		}
	}
});

export { default as yelli } from "./yelli";