import { combineReducers } from "redux";
import { todoslice } from "./reducers/todoSlice";


const rootreducer= combineReducers({
    todo: todoslice.reducer
})
export default rootreducer