import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getWeather, setWeather } from '../../redux/weather-reducer'
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { Forecast } from './Forecast';
import stls from './Forecast.module.css'
import humidityImg from '../../img/humidity.png'
import pressureImg from '../../img/pressure.png'
import temperatureImg from '../../img/temperature.png'
import windImg from '../../img/wind.png'
import rainImg from '../../img/rain.png'
import hourImg from '../../img/hour.png'
import cn from 'classnames'

const ForecastHook = (props) => {
	const addZero = (num) => {
		if (!String(num).includes('.'))
			return num + '.0'
		return num
	}

	const weatherIndicatorMaker = (indicator, value, index) => {
		switch (indicator) {

			// case 'time':
			// 	return <div className={cn(stls.rowElement)} key={0}> <img src={hourImg} alt="" /> {value.slice(10)}</div>
			// case 'temp_c':
			// 	return <div title='Temparature' className={cn(stls.rowElement)} key={1}> <img src={temperatureImg} alt="" />  {Math.round(value)}°</div>
			// case 'condition':
			// 	return <div className={cn(stls.rowElement)} key={2}><img title={value.text} src={value.icon} alt="" />  </div>
			// case 'chance_of_rain':
			// 	return <div title='Rain' className={cn(stls.rowElement)} key={3}><img src={rainImg} alt="" /> {value}%</div>
			// case 'humidity':
			// 	return <div title='Humidity' className={cn(stls.rowElement)} key={4}><img src={humidityImg} alt="" /> {value}%</div>
			// case 'pressure_mb':
			// 	return <div title='Pressure' className={cn(stls.rowElement)} key={5}><img src={pressureImg} alt="" /> {value}</div>
			// case 'wind_kph':
			// 	return <div title='Wind' className={cn(stls.rowElement, stls.rowElementLast)} key={6}><img src={windImg} alt="" /> {addZero(value)} kph</div>
			// default:
			// 	return false

			case 'time':
				return <div className={cn(stls.rowElement)} key={0}> <img src={hourImg} alt="" /> {value.slice(10)}</div>
			case 'temp_c':
				return <div className={cn(stls.rowElement)} key={1}>
					<img src={temperatureImg} alt="" />
					{Math.round(value)}°
					<span className={stls.tooltiptext}>Temparature</span>
				</div>
			case 'condition':
				return <div className={cn(stls.rowElement)} key={2}>
					<img src={value.icon} alt="" />
					<span className={stls.tooltiptext}>{value.text}</span>
				</div>
			case 'chance_of_rain':
				return <div className={cn(stls.rowElement)} key={3}>
					<img src={rainImg} alt="" />
					<span className={stls.tooltiptext}>Rain</span>
					{value}%
				</div>
			case 'humidity':
				return <div className={cn(stls.rowElement)} key={4}>
					<img src={humidityImg} alt="" />
					{value}%
					<span className={stls.tooltiptext}>Humidity</span>
				</div>
			case 'pressure_mb':
				return <div className={cn(stls.rowElement)} key={5}>
					<img src={pressureImg} alt="" />
					{value}
					<span className={stls.tooltiptext}>Pressure</span>
				</div>
			case 'wind_kph':
				return <div className={cn(stls.rowElement, stls.rowElementLast)} key={6}>
					<img src={windImg} alt="" />
					{addZero(value)} kph
					<span className={stls.tooltiptext}>Wind</span>
				</div>
			default:
				return false
		}
	}

	useEffect(() => {
		props.getWeather(props.city)
	}, [props.city])

	const makeForecast = (day) => {
		const madeForecastArr = day.hour.map((h, i) => {
			let properties = []
			let index = 1
			for (const key in h) {
				let newIndicator = weatherIndicatorMaker(key, h[key], index)
				if (newIndicator) {
					index += 1
					properties.push(newIndicator)
				}
			}

			properties.sort((a, b) => a.key - b.key)
			return <div key={i} className={stls.row} >{properties} </div>
		})
		return madeForecastArr
	}

	const getDate = (day) => {
		return day.date
	}

	const todayForecast = makeForecast(props.day1)
	const tomorrowForecast = makeForecast(props.day2)
	const thirdDayForecast = makeForecast(props.day3)
	const dates = [getDate(props.day1), getDate(props.day2), getDate(props.day3)]

	return (
		<div>
			<Forecast pathName={props.location.pathname} todayForecast={todayForecast} tomorrowForecast={tomorrowForecast} thirdDayForecast={thirdDayForecast} dates={dates} city={props.city} country={props.country} />
		</div>
	)

}

const setPropsToState = (state) => {
	const forecastDay = state.weather.forecast.forecastday
	return {
		day1: forecastDay[0],
		day2: forecastDay[1],
		day3: forecastDay[2],
		city: state.weather.city,
		country: state.weather.location.country,

	}
}


export default compose(withRouter, connect(setPropsToState, { getWeather, setWeather }))(ForecastHook)
