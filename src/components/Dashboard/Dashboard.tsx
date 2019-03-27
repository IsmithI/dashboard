import * as React from "react";
import { Grow, Typography, Button } from "@material-ui/core";
import { Delayed } from "../common/Delayed";
import { DigitalClock } from "./Widgets";
import { Container, Item } from "../common/Grid";

export const Dashboard = () => (
	<Container direction="column" justify="space-between">
		<Container spacing={8} direction="column" alignItems="stretch">
			{components.map((component: React.ReactNode, i: number) => (
				<Item key={i}>
					<Container>
						<Item>
							<Delayed time={200 + i * 50}>
								<Grow in={true} timeout={400}>
									{component}
								</Grow>
							</Delayed>
						</Item>
					</Container>
				</Item>
			))}
		</Container>
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

const components = [
	<DigitalClock />,
	<Typography variant="h3">Time</Typography>,
	<Button variant="contained" color="primary" size="large" component="h2">
		GO!
	</Button>
];
