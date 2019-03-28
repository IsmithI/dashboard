import * as React from "react";
import Card, { CardProps } from "@material-ui/core/Card";
import {
	CardHeader,
	IconButton,
	Icon,
	CardContent,
	ListItem,
	List,
	ListItemText,
	Checkbox,
	Typography
} from "@material-ui/core";
import { get } from "../../../../utils";

export interface ITodoListProps extends CardProps {}

interface ITodoListState {
	list: ITodoItem[];
}

export class TodoList extends React.Component<ITodoListProps, ITodoListState> {
	state: ITodoListState = {
		list: []
	};

	render() {
		const { list } = this.state;

		return (
			<Card>
				<CardHeader
					title="ToDo List"
					action={
						<IconButton color="primary">
							<Icon>add_circle</Icon>
						</IconButton>
					}
				/>
				<CardContent>
					<List>
						{list.map(item => (
							<ListItem>
								<ListItemText>
									<Checkbox />
									<Typography>{item.text}</Typography>
								</ListItemText>
							</ListItem>
						))}
					</List>
				</CardContent>
			</Card>
		);
	}

	componentDidMount = () => {
		get<ITodoItem[]>("/todo").then(res => this.setList(res.payload));
	};

	setList = (list: ITodoItem[]) => this.setState({ list });
}

interface ITodoItem {
	text: string;
}
