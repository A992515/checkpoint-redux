import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import placesToVisitReducer from "./placesToReducer";

export default combineReducers({ todosReducer, placesToVisitReducer });