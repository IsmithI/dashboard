import * as React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { NotFound } from "../components";
import { Dashboard } from "../components/Dashboard";

export const ApplicationRouter = () => (
	<Router>
		<Switch>
			<Route path="/" component={Dashboard} />
			<Route path="dashboard" component={Dashboard} />
			<Route component={NotFound} />
		</Switch>
	</Router>
);
