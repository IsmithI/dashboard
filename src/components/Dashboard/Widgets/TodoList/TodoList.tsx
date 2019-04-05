import * as React from "react";
import Card, { CardProps } from "@material-ui/core/Card";
import { CardHeader, IconButton, Icon, ListItem, List, Checkbox, Typography, Collapse } from "@material-ui/core";
import { observer, inject } from "mobx-react";
import { ITodoStore } from "../../../../stores/todoStore";
import { AddItemModal } from "./AddItemModal";
import { Container, Item } from "../../../common/Grid";

export interface ITodoListProps extends CardProps {
	todoStore?: ITodoStore;
}

@inject("todoStore")
@observer
export class TodoList extends React.Component<ITodoListProps> {
	state = {
		modalIsOpen: false
	};

	render() {
		const { todoStore, ...props } = this.props;

		return (
			todoStore && (
				<>
					<Card {...props}>
						<CardHeader
							title="ToDo List"
							action={
								<IconButton color="primary" onClick={this.openModal}>
									<Icon>add_circle</Icon>
								</IconButton>
							}
						/>
						<List disablePadding>
							<Collapse in={todoStore.items.length > 0}>
								{todoStore.items.map(item => (
									<ListItem key={item._id}>
										<Container wrap={false} justify="space-between" flex={1}>
											<Container wrap={false} alignItems="center" flex={1}>
												<Item>
													<Checkbox color="primary" />
												</Item>
												<Item grow={1}>
													<Typography>{item.title}</Typography>
												</Item>
											</Container>
											<Item>
												<IconButton>
													<Icon>delete</Icon>
												</IconButton>
											</Item>
										</Container>
									</ListItem>
								))}
							</Collapse>
						</List>
					</Card>
					<AddItemModal isOpen={this.state.modalIsOpen} onClose={this.closeModal} />
				</>
			)
		);
	}

	setModalState = (modalIsOpen: boolean) => this.setState({ modalIsOpen });

	openModal = () => {
		this.setModalState(true);
	};

	closeModal = () => {
		this.setModalState(false);
	};

	componentDidMount = () => {
		if (this.props.todoStore) this.props.todoStore.loadItems();
	};
}
