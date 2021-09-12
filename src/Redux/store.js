import { createStore, compose } from "redux"
import App from "./reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(App, composeEnhancers())

export default store
