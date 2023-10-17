import { combineReducers } from "redux";
import todoReducer from "./features/todo/todoSlice";
import filterReducer from "./features/filters/filterSlice";

// export default function rootReducer(state={}, action){
//     return{
//         todos: todoReducer(state.todos, action),
//         filters: filterReducer(state.filters, action)
//     }
// }

//combineReducers accepts an object where the key names will become the keys in your root state object, and the values are 
//the slice reducer functions that know how to update those slices of the Redux state.
const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer
})
export default rootReducer;