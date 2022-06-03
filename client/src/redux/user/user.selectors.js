import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

// export const selectCartItemsCount = createSelector(
//   [selectCartItems],
//   (cartItems) =>
//     cartItems.reduce(
//       (accumalatedQuantity, cartItem) =>
//         accumalatedQuantity + cartItem.quantity,
//       0
//     )
// );
