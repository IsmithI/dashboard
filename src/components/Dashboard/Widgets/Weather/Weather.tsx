import React from "react";
import { CircularProgress } from "@material-ui/core";
import { CardProps } from "@material-ui/core/Card";
import { inject, observer } from "mobx-react";
import { IWeatherStore } from "../../../../stores/weatherStore";
import { WeatherDetails } from "./WeatherDetails";
import { ErrorContainer } from "./ErrorContainerProps";

export interface IWeatherProps extends CardProps {
	weatherStore?: IWeatherStore;
}

@inject("weatherStore")
@observer
export class Weather extends React.Component<IWeatherProps> {
	componentDidMount() {
		if (this.props.weatherStore) this.props.weatherStore.loadWeatherData();
	}

	render() {
		if (!this.props.weatherStore) return <></>;

		const {
			weatherStore: { error, loading, data }
		} = this.props;

		return loading ? (
			<CircularProgress variant="indeterminate" />
		) : error ? (
			<ErrorContainer message={error} />
		) : (
			<WeatherDetails data={data} />
		);
	}
}
