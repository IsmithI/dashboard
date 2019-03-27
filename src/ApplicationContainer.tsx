import * as React from "react";
import {
	withStyles,
	createStyles,
	WithStyles,
	Grid,
	Theme
} from "@material-ui/core";
import { IHasChildren } from "./interfaces";

const styles = (theme: Theme) =>
	createStyles({
		root: {
			minHeight: "100vh",
			backgroundColor: theme.palette.background.default
		},
		content: {
			padding: "0.5em",
		}
	});

interface IApplicationContainerProps
	extends IHasChildren,
		WithStyles<typeof styles> {}

export const ApplicationContainer = withStyles(styles)(
	({ classes, children }: IApplicationContainerProps) => (
		<div className={classes.root}>
			<div className={classes.content}>
				<Grid container>
					<Grid item xs={12}>{children}</Grid>
				</Grid>
			</div>
		</div>
	)
);
