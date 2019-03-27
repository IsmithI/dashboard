import * as React from "react";
import {
	Card as MaterialCard,
	withStyles,
	WithStyles,
	createStyles
} from "@material-ui/core";
import { CardProps } from "@material-ui/core/Card";

const styles = createStyles({
	card: {
		boxShadow: "0 4px 20px 2px rgba(0, 0, 0, .15)"
	}
});

interface ICardProps extends CardProps, WithStyles<typeof styles> {
	classes: any;
}

export const Card = withStyles(styles)(({ classes, ...props }: ICardProps) => (
	<MaterialCard {...props} className={classes.card} />
));

export * from "@material-ui/core/CardHeader";
export * from "@material-ui/core/CardActions";
export * from "@material-ui/core/CardActionArea";
export * from "@material-ui/core/CardContent";
export * from "@material-ui/core/CardMedia";
