import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import mainReducer from "./MainReducer";

const rootReducer = combineReducers({mainReducer, routing: routerReducer});
export default rootReducer;
