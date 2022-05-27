import { ShopActionTypes } from "./shop.types";

export const updateCollection = (collectionsMaps) => ({
  type: ShopActionTypes.SET_CURRENT_USER,
  payload: collectionsMaps,
});
