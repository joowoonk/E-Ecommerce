// import { all, call } from "redux-saga/effects";
// //all will initialize all calls for other sagas side by side together, so it's good that we dont have to wait code to fetch or run one by one.

// import { fetchCollectionsStart } from "./shop/shop.sagas";
// import { userSagas } from "./user/user.sagas";

// export default function* rootSaga() {
//   yield all([
//     call(fetchCollectionsStart),
//     call(userSagas),
//     //we can just call fetchCollectionsStart() mannually but for sake of practicing... we will use call
//   ]);
// }
