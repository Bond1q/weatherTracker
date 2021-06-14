import React from 'react';
import stls from './Forecast.module.css'
export const Forecast = ({ pathName, todayForecast, tomorrowForecast, thirdDayForecast, dates, country, city }) => {

	const locationInfo = (day, forecast) => {
		return (
			<div className={stls.locationInfo}>
				<div className={stls.mainInfo}>

					<div className={stls.smallRow}>
						<div className={stls.city}>{city},</div>
						<div className={stls.country}>{country}</div>
					</div>

					<div><div className={stls.date}>{dates[day]}</div></div>
				</div>
				<div >{forecast}</div>
			</div>)
	}

	return (
		<div >
			{pathName === '/today' ? locationInfo(0, todayForecast) :
				pathName === '/tomorrow' ? locationInfo(1, tomorrowForecast) :
					locationInfo(2, thirdDayForecast)

			}

		</div>
	)
}