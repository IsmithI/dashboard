import * as React from "react";
import { Dialog, DialogTitle, TextField, DialogContent, Button, Grid } from "@material-ui/core";
import { useState } from "react";
import { inject } from "mobx-react";
import { ITodoStore } from "../../../../stores/todoStore";

export interface IAddItemModalProps {
	isOpen: boolean;
	onClose: () => void;
	todoStore?: ITodoStore;
}

export const AddItemModal = inject("todoStore")(({ isOpen, onClose, todoStore }: IAddItemModalProps) => {
	const [text, setText] = useState("");
	const addItem = () =>
		todoStore &&
		todoStore.addItem({
			title: text,
			created: new Date().toISOString(),
			done: false
		});

	return (
		<Dialog open={isOpen} onClose={onClose}>
			<DialogTitle>What should we do next?</DialogTitle>
			<DialogContent>
				<Grid container spacing={8} alignItems='flex-end'>
					<Grid item>
						<TextField id="text" value={text} onChange={e => setText(e.target.value)} rows={4} fullWidth multiline />
					</Grid>
					<Grid item>
						<Button color="primary" onClick={addItem}>
							Save
						</Button>
					</Grid>
				</Grid>
			</DialogContent>
		</Dialog>
	);
});
