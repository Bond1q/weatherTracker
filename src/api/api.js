import axios from "axios";

const paraments = (city) => {
	return {
		method: 'GET',
		url: 'https://api.weatherapi.com/v1/forecast.json',
		params: { q: city, days: 10 },
		headers: {
			'key': 'c4689bb50523409b927181316212105'
		}
	}
}

export const weatherForecast = async (city) => {
	try {
		const response = await axios.request(paraments(city));
		return response;

	} catch (error) {
		const r = {
			status: 0
		}
		return r
	}
}

// const instance = axios.create({
// 	url: 'http://api.weatherapi.com/v1/forecast.json',
// 	params: { q: 'Paris', days: 3 },
// 	headers: {
// 		'key': 'c4689bb50523409b927181316212105'
// 	}
// })

// export const weatherForecastApi = {
// 	forecast: () => {
// 		return instance.get('').then(response => response)
// 	}
// }
