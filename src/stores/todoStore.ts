import { observable, action } from "mobx";
import { ITodoItem } from "./../interfaces/ITodoItem";
import { get, put } from "../utils";

export interface ITodoStore {
	items: ITodoItem[];
	loadItems: () => Promise<ITodoItem[]>;
	addItem: (item: ITodoItem) => Promise<any>;
}

class TodoStore implements ITodoStore {
	@observable items: ITodoItem[] = [];

	loadItems = () => get<ITodoItem[]>("/todo").then(this.saveItems);

	@action
	saveItems = (items: ITodoItem[]) => {
		this.items = items;
		return items;
	};

	@action
	addItem = (item: ITodoItem) =>
		put("/todo", item).then(() => {
			this.items.push(item);
		});
}

export const todoStore = new TodoStore();
