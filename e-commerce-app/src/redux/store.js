import { legacy_createStore,combineReducers,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import { appReduser } from "./app/reduser";
import { authReduser } from "./auth/reduser";
import { cartReduser } from "./cart/reduser";



const rootReduser=combineReducers({
 app:appReduser,
 cart:cartReduser,
 auth:authReduser
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store =legacy_createStore(rootReduser,composeEnhancers(applyMiddleware(thunk)));