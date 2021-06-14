import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getWeather, setWeather } from '../../redux/weather-reducer'
import { CurrentWeather } from './CurrentWeather';

// class currentWeatherContainer extends React.Component {

// 	componentDidMount = () => {
// 		this.props.getWeather('Paris')

// 	}

// 	render = () => {
// 		return (
// 			<div>
// 				{this.props.current.temp_c}
// 			</div>
// 		)
// 	}
// }

const CurrentWeatherHook = (props) => {

	useEffect(() => {
		props.getWeather(props.city)
	}, [props])
	return (
		<CurrentWeather temparature={props.temparature} kindWeather={props.kindWeather} icon={props.icon} country={props.country} region={props.region}
			windSpeed={props.windSpeed} pressure={props.pressure} humidity={props.humidity} cloud={props.cloud} temparatureFeels={props.temparatureFeels} city={props.city}
		/>
	)

}

const setPropsToState = (state) => {
	const current = state.weather.current
	return {
		temparature: current.temp_c,
		kindWeather: current.condition.text,
		icon: current.condition.icon,
		windSpeed: current.wind_kph,
		pressure: current.pressure_mb,
		humidity: current.humidity,
		cloud: current.cloud,
		temparatureFeels: current.feelslike_c,
		city: state.weather.city,
		country: state.weather.location.country,
		region: state.weather.location.region,

	}
}



export default connect(setPropsToState, { getWeather, setWeather })(CurrentWeatherHook)