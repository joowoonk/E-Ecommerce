import { createStore, applyMiddleware } from "redux";

import { persistStore } from "redux-persist";

import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];
//if we comment out line 6

const store = createStore(rootReducer, applyMiddleware(...middlewares));
//then ...midlewares replaced by logger

const persistor = persistStore(store);

export { store, persistor };
