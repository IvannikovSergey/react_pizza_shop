import filterReducer from './filter'
import pizzasReducer from './pizzas'
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    filter: filterReducer,
    pizzas: pizzasReducer
})

export default rootReducer