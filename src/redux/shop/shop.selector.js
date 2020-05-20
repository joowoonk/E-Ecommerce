import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
); //recommend to console.log shop if you are confused what shop does contain.

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

// export const selectCollection = (collectionUrlParam) =>
//   createSelector([selectCollections], (newCollection) => {
//     // console.log("selectCollections", selectCollections);
//     // console.log("newCollection is state?", newCollection);
//     return newCollection.find((collections) => collections[collectionUrlParam]);
//   });
export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
