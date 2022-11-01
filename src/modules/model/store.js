import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import initialState from "./initialState";
import rootReducer from "./reducers/rootReducer";

// const store = createStore(rootReducer, initialState, applyMiddleware(logger));
const store = createStore(rootReducer, initialState);

export default store;
