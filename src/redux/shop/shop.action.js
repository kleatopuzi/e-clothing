import ShopActionTypes from "./shop.types";

export const updateCollection = (collectionsMaps) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMaps,
});
