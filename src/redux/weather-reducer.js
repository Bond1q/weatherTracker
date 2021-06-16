import { weatherForecast } from '../api/api'

const SET_WEATHER = 'SET_WEATHER'
const SET_CITY = 'SET_CITY'
const CHANGE_STATUS = 'CHANGE_STATUS'
let initialStore = {
	current: {
		temparature: '', windSpeed: '',
		pressure: '', humidity: '', cloud: '', temparatureFeels: '', condition: { text: '', icon: '' }
	},
	forecast: {
		"forecastday": [
			{
				"date": "2021-06-07",
				"hour": [
					{
						"time": "2021-06-07 00:00",
						"temp_c": 15.0,
						"condition": {
							"text": "Moderate or heavy rain shower",
							"icon": "//cdn.weatherapi.com/weather/64x64/night/356.png",
						},
						"wind_kph": 6.5,
						"pressure_mb": 1024.0,
						"humidity": 96,
						"chance_of_rain": "73",

					},
				]
			},
			{
				"date": "2021-06-08",
				"hour": [
					{
						"time": "2021-06-07 00:00",
						"temp_c": 15.0,
						"condition": {
							"text": "Moderate or heavy rain shower",
							"icon": "//cdn.weatherapi.com/weather/64x64/night/356.png",
						},
						"wind_kph": 6.5,
						"pressure_mb": 1024.0,
						"humidity": 96,
						"chance_of_rain": "73",

					},
				]
			}, {
				"date": "2021-06-09",
				"hour": [
					{
						"time": "2021-06-07 00:00",
						"temp_c": 15.0,
						"condition": {
							"text": "Moderate or heavy rain shower",
							"icon": "//cdn.weatherapi.com/weather/64x64/night/356.png",
						},
						"wind_kph": 6.5,
						"pressure_mb": 1024.0,
						"humidity": 96,
						"chance_of_rain": "73",

					},
				]
			},


		]
	},
	location: { country: 'Ukraine', region: "Kyyivs'ka Oblast'" },
	city: localStorage.getItem('city') || 'Kiev',
	status: true

}

const ucFirst = (str) => {
	str = str.toLowerCase()
	if (str.includes(' ')) {
		const indexGap = str.indexOf(' ')
		str = str[0].toUpperCase() + str.slice(1, indexGap + 1) + str[indexGap + 1].toUpperCase() + str.slice(indexGap + 2)
		return str

	}
	return str[0].toUpperCase() + str.slice(1)
}
const deleteAllGaps = (word) => word.replace(/ +/g, " ").replace(/^\s+|\s+$/g, "")


const weatherReducer = (state = initialStore, action) => {
	switch (action.type) {
		case SET_WEATHER:
			return { ...state, current: action.weatherData.current, forecast: action.weatherData.forecast, location: action.weatherData.location }

		case SET_CITY: {
			let city = deleteAllGaps(action.city)
			if (city === '') {
				return state
			}

			localStorage.setItem('city', ucFirst(city));
			getWeather(ucFirst(city))
			return { ...state, city: ucFirst(city), status: true }
		}

		case CHANGE_STATUS: {
			return { ...state, status: false }
		}

		default:
			return state

	}
}

export const setWeather = (weatherData) => ({ type: SET_WEATHER, weatherData })
export const setCity = (city) => ({ type: SET_CITY, city })
export const changeStatus = () => ({ type: CHANGE_STATUS })

export const getWeather = (city) => {
	return dispatch => {
		weatherForecast(city).then(response => {
			if (response.status === 200) {
				dispatch(setWeather(response.data))
			} else {
				dispatch(changeStatus())
			}

		})
	}
}
export default weatherReducer
