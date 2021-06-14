import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import weatherReducer from "./weather-reducer";


let reducers = combineReducers({
	weather: weatherReducer

})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store.getState()
export default store