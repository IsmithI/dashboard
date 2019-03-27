import * as React from "react";
import { IHasChildren } from "../../interfaces";
import { useState, useEffect } from "react";

export interface IDelayedProps extends IHasChildren {
	time: number;
}

export const Delayed = ({ children, time }: IDelayedProps) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const id = setTimeout(() => setShow(true), time);
		return () => clearTimeout(id);
	});
 
	return show ? <>{children}</> : <></>;
};
