import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setCity } from '../../../redux/weather-reducer';
import stls from './FindCity.module.css'
import img from '../../../img/findCity.png'
import { makeChecked } from '../Header'
const FindCityHook = (props) => {

	const [city, changeCity] = useState('')
	const changeInput = (e) => {
		changeCity(e.target.value)
	}



	const enterKeyEvent = (e) => {
		if (e.key === 'Enter') {
			props.setCity(city)
			changeCity('')
			makeChecked()
		}
	}

	const setCleanCityName = (e) => {
		props.setCity(city)
		changeCity('')
		makeChecked()

	}

	return (
		<div>
			<div>
				<input className={stls.inputStl} onKeyDown={enterKeyEvent} type="text" value={city} onChange={changeInput} placeholder={'Write city name'} />
				<span className={stls.findCity}><img src={img} onClick={setCleanCityName} alt={'find'} /></span>
			</div>

		</div>
	)
}

const setPropsToState = (state) => {
	const forecastDay = state.weather.forecast.forecastday
	return {
		day1: forecastDay[0],
		day2: forecastDay[1],
		day3: forecastDay[2],

	}
}

export default connect(setPropsToState, { setCity })(FindCityHook)