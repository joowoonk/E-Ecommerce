// comibine other reducers into this file.

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
//To make All Reducers to be persistent
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
  //cart is coming from cart from combineReducers
};

const rootReucer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReucer);
