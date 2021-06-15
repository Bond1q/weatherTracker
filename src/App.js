import './App.css';
import Header from './Components/Header/Header';
import CurrentWeatherHook from './Components/CurrentWeather/CurrentWeatherHook';
import { Redirect, Route, Switch } from 'react-router-dom';
import ForecastHook from './Components/Forecast/ForecastHook';
import { connect } from 'react-redux';
import { Problem } from './Components/Problem/Problem';
import { compose } from 'redux';
import { withRouter } from 'react-router';

const App = (props) => {

	return (
		<div >
			<Header pathName={props.location.pathname} />

			{!props.status ? <Problem /> :

				<Switch>
					<Route path='/current' component={CurrentWeatherHook} />
					<Route path={['/today', '/tomorrow', '/dayAfterTomorrow']} component={ForecastHook} />
					<Redirect from="/" to="/current" />
				</Switch>
			}
		</div>
	);
}

const setPropsToState = (state) => {
	return {
		status: state.weather.status
	}
}
export default compose(withRouter, connect(setPropsToState, {}))(App)
