import * as React from "react";
import { useState, useEffect } from "react";

export interface IDelayedProps {
	time: number;
	children: (show: boolean) => React.ReactNode;
}

export const Delayed = ({ children, time }: IDelayedProps) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const id = setTimeout(() => setShow(true), time);
		return () => clearTimeout(id);
	});
 
	return <>{children(show)}</>;
};
