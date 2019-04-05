import * as React from "react";
import { AppBar, Theme, createStyles, withStyles, WithStyles, Icon, Grid, Button, Slide } from "@material-ui/core";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import { Route } from "react-router";
import { Delayed } from "../common/Delayed";

const styles = ({  }: Theme) =>
	createStyles({
		appBar: {
			top: "auto",
			bottom: 0,
			padding: "0.6em"
		}
	});

export interface IBottomBarProps extends WithStyles<typeof styles> {}

export const BottomBar = withStyles(styles)(({ classes }: IBottomBarProps) => {
	const isMobile = useMediaQuery("(max-width:600px");
	return (
		<>
			{isMobile && (
				<Route>
					{({ location }) => {
						return (
							<Slide direction="up" timeout={400} in={true}>
								<AppBar position="fixed" className={classes.appBar} color="secondary">
									<Grid container justify="center" spacing={16}>
										{navigationButtons.map((button, i) => (
											<Delayed time={200 + i * 50} key={button.id}>
												{show => (
													<Grid item>
														<Slide direction="up" in={show}>
															<Button
                                size='large'
																color="primary"
																variant={location.pathname === button.path ? "contained" : "outlined"}
															>
																<Icon>{button.icon}</Icon>
															</Button>
														</Slide>
													</Grid>
												)}
											</Delayed>
										))}
									</Grid>
								</AppBar>
							</Slide>
						);
					}}
				</Route>
			)}
		</>
	);
});

const navigationButtons = [
	{
		id: "dashboard",
		path: "/",
		icon: "dashboard"
  },
  {
		id: "settings",
		path: "/settings",
		icon: "settings"
	}
];
