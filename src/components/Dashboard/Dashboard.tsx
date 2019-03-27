import * as React from "react";
import { Grid, withStyles, createStyles, WithStyles } from "@material-ui/core";
import { DigitalClock } from "./Widgets";

const styles = createStyles({
	root: {
		padding: '0.5em'
	}
})

export const Dashboard = withStyles(styles)(({ classes }: WithStyles<typeof styles>) => (
	<div className={classes.root}>
		<Grid container spacing={32}>
			<Grid item>
				<DigitalClock />
			</Grid>
		</Grid>
	</div>
));
