import React, { useState } from "react";
import { restGet } from "../../../../utils";
import config from "./config";
import { Typography, CircularProgress, CardContent } from "@material-ui/core";
import Card, { CardProps } from "@material-ui/core/Card";

const errors = {
	loading: "Oops! Can't get weather from server...",
	unsupported: "Oops! Your browser does not support auto geolocation",
	permissions: "Oops! Location service is disabled by your browser",
	unknown: "Unknown error..."
};

export interface IWeatherProps extends CardProps {}

export const Weather = () => {
	const [error, setError] = useState<string | false>(false);
	const [loaded, setLoaded] = useState(false);
	const [data, setData] = useState();
	const [geolocation, setGeolocation] = useState<Position | false>(false);

	if (!geolocation)
		checkGeolocation(
			postion => {
				setGeolocation(postion);
				loadWeatherData(postion, res => {
          setData(res);
        })
        .then(() => setLoaded(true))
        .catch(() => setError(errors.loading));

			},
			error => {
				setError(error.message);
				setLoaded(true);
			}
		);


	return loaded ? (
		<Card>
			<CardContent>{!!error ? <ErrorContainer message={error} /> : <WeatherDetails data={data} />}</CardContent>
		</Card>
	) : (
		<CircularProgress variant="indeterminate" />
	);
};

function loadWeatherData(position: Position, callback: (data: any) => void) {
	const {
		coords: { latitude, longitude }
	} = position;

	const url = `${config.endpoint}/weather?lat=${latitude}&lon=${longitude}&APPID=${config.appId}`;

	return restGet(url).then(res => {
		callback(res);
	});
}

function checkGeolocation(callback: (position: Position) => void, error?: (code: PositionError) => void) {
	if (!!navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(callback, error);

		return;
	}
}

interface ErrorContainerProps {
	message: string;
}

const ErrorContainer = ({ message }: ErrorContainerProps) => <Typography variant="title">{message}</Typography>;

const WeatherDetails = ({ data }: any) => {
	const temperature = Math.round(100 * (data.main.temp - 273)) / 100;

	return <Typography variant="h4">{temperature}&deg;C</Typography>;
};
