import React from 'react';
import stls from './CurrentWeather.module.css'
import humidityImg from '../../img/humidity.png'
import pressureImg from '../../img/pressure.png'
import temperatureImg from '../../img/temperature.png'
import windImg from '../../img/wind.png'

export const CurrentWeather = ({ temparature, kindWeather, icon, windSpeed,
	pressure, humidity, cloud, temparatureFeels, city, country, region }) => {


	return (

		<div className={stls.currentWeather}>
			<div className={stls.mainChapter}>
				<div className={stls.location} ><b>{city}</b>  {country},<span>{document.documentElement.clientWidth > 479 && region}</span></div>
				<div className={stls.icon}><img src={icon} alt="" /></div>
				<div className={stls.typeWeather}> {kindWeather}</div>

			</div>
			<div className={stls.weatherConditions}>
				<div className={stls.row}><img src={temperatureImg} alt="" />    Temparature: {temparature} <span>°</span></div>
				<div className={stls.row}><img src={temperatureImg} alt="" />   Temparature feels like: {temparatureFeels} <span>°</span></div>
				<div className={stls.row}><img src={humidityImg} alt="" />   Humidity: {humidity}%</div>
				<div className={stls.row}><img src={pressureImg} alt="" />   Pressure: {pressure}</div>
				<div className={stls.row}><img src={windImg} alt="" /> Wind speed: {windSpeed}</div>
			</div>
		</div>
	)

}





