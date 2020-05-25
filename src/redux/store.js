import { createStore, applyMiddleware } from "redux";

import { persistStore } from "redux-persist";

import logger from "redux-logger";

import rootReducer from "./root-reducer";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

// import { fetchCollectionsStart } from "./shop/shop.sagas";

import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
//if we comment out line 6

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
} // throguh this, heroku app wont show any logger, because heroku is not under development, rather production.

const store = createStore(rootReducer, applyMiddleware(...middlewares));
//then ...midlewares replaced by logger

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
