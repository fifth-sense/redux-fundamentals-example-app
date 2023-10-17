import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import {print1, print2, print3} from './exampleAddons/middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(
    // EXAMPLE: Add whatever middleware you actually want to use here
    applyMiddleware(print1, print2, print3)
    // other store enhancers if any
  )

const middleWare = applyMiddleware(print1, print2, print3)
const store = createStore(rootReducer, composedEnhancer)
export default store;
