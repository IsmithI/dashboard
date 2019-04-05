import * as React from "react";
import { withStyles, createStyles, WithStyles, Theme, Grid } from "@material-ui/core";
import { IHasChildren } from "./interfaces";

const styles = (theme: Theme) => createStyles({
	root: {
		minHeight: "100vh",
		backgroundColor: theme.palette.background.default,
		transition: `background-color ease-in-out 400ms 500ms`
	},
	content: {
		padding: '0.5em'
	}
});

interface IApplicationContainerProps
	extends IHasChildren,
		WithStyles<typeof styles> {}

export const ApplicationContainer = withStyles(styles)(
	({ classes, children }: IApplicationContainerProps) => (
		<div className={classes.root}>
			<div className={classes.content}>
				<Grid container justify='center'>
					<Grid item xs={12} md={10} lg={8}>
						{children}
					</Grid>
				</Grid>
			</div>
		</div>
	)
);
