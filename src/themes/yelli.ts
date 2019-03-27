import { createMuiTheme } from "@material-ui/core";
import { yellow, grey } from "@material-ui/core/colors";

export default createMuiTheme({
	palette: {
		primary: {
			main: '#000',
			light: grey[400],
			contrastText: '#fff'
		},
		secondary: {
			main: '#fff',
			contrastText: '#000'
		},
		background: {
			paper: '#fff',
			default: yellow[700],
		}
	},
	typography: {
		h3: {
			fontWeight: 600
		}
	},
	shape: {
		borderRadius: 18,
	},
	spacing: {
		unit: 8
	},
})