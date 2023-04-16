import { applyMiddleware, legacy_createStore} from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from "./rotReducer";
const store = legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store