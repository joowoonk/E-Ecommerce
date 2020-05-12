import { createSelector } from "reselect";

const selectCart = (state) => state.cart; //5

// const selectUser = state => state.user // if you want to add an user, you would put in next to cart argument. And the selectUser variable will be put next to selectCart in the array.

export const selectCartItems = createSelector(
  //3
  [selectCart], //4
  (cart) => cart.cartItems //6
);

export const selectCartItemsCount = createSelector(
  //1 selectCartItemsCount being called from cart-icon cmp.
  [selectCartItems], // 2 look for the variable which will find selectCartItems on line 7
  (
    cartItems //7
  ) =>
    cartItems.reduce(
      //8
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
