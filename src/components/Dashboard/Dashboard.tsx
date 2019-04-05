import * as React from "react";
import { Grow, Button, withWidth, Grid } from "@material-ui/core";
import { DigitalClock, TodoList } from "./Widgets";
import { Container, Item } from "../common/Grid";
import { WithWidth } from "@material-ui/core/withWidth";
import { IWidget } from "../../interfaces";
import { Delayed } from "../common/Delayed";
import { GridProps } from "@material-ui/core/Grid";

interface IDashboardProps extends WithWidth {}

export const Dashboard = withWidth()(({ width }: IDashboardProps) => {
	const isMobile = ["xs", "sm"].includes(width);

	const containerProps: GridProps = isMobile
		? {
				direction: "row",
				alignItems: "center",
				justify: "center"
		  }
		: {
				direction: "row",
				alignItems: "center",
				justify: "center"
		  };

	return (
		<Container direction="column" wrap={false} justify="center" alignItems="stretch">
			<Grid container {...containerProps}>
				{components.map((widget: IWidget, i: number) => {
					const grow = widget.grow || 'auto';
					return (
						<Grid item key={widget.id} xs={grow >= 6 ? 12 : 'auto'} sm={grow >= 6 ? true : grow} md={grow}>
							<Delayed time={100 + i * 50}>
								{show => (
									<Grow in={show} timeout={400}>
										<div style={{ padding: '0.8em'}}>
											{widget.component}
										</div>
									</Grow>
								)}
							</Delayed>
						</Grid>
					)
				})}
			</Grid>
			<Container spacing={8}>
				<Item>
					<Button variant="contained" color="secondary">
						H
					</Button>
				</Item>
				<Item>
					<Button variant="contained" color="secondary">
						B
					</Button>
				</Item>
			</Container>
		</Container>
	);
});

const components: IWidget[] = [
	{
		id: "digital_clock",
		component: <DigitalClock />,
	},
	{
		id: "todo_list",
		component: <TodoList />,
		grow: 6
	}
];
