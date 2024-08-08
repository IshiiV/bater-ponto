import {combineReducers} from "redux";
import expedienteReducer from "./expedienteReducer";

const reducers = combineReducers({
	expediente: expedienteReducer,
});

export default reducers;