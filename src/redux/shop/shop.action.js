import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase-utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMaps) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMaps,
});
export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    // const collectionRef = firestore.collection("collections");
    // dispatch(fetchCollectionStart());
    // collectionRef
    //   .get()
    //   .then((snapShot) => {
    //     const collectionsMaps = convertCollectionsSnapshotToMap(snapShot);
    //     dispatch(fetchCollectionsSuccess(collectionsMaps));
    //   })
    //   .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
