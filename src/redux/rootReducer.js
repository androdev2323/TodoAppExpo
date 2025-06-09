import { combineReducers } from "redux";
import { todoslice } from "./reducers/todoSlice";

const rootreducer= combineReducers({
    todo: todoslice
})
export default rootreducer