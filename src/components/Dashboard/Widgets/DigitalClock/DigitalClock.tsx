import * as React from 'react';
import { Card } from "../../../common/Card";
import { useState, useEffect } from "react";
import { Typography, CardContent } from "@material-ui/core";
import { startsWithZero, getDayOfWeek } from '../../../../utils';

export const DigitalClock = () => {
	const [time, updateTime] = useState(new Date());
	useEffect(() => {
		const id  = setInterval(() => updateTime(new Date), 1000);
		return () => clearInterval(id);
	});

	return (
		<Card>
			<CardContent>
				<Typography variant='h3'>
					{time.getHours()}:
					{startsWithZero(time.getMinutes())}:
					{startsWithZero(time.getSeconds())}
				</Typography>
				<Typography variant='subtitle1'>
					{time.getDate()} {getDayOfWeek(time.getDay())}
				</Typography>
			</CardContent>
		</Card>
	);
};
