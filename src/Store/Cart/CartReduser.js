import {
  ADD_TO_CART,
  CART_PRODUCT_QUANTITY_Down,
  CART_PRODUCT_QUANTITY_Up,
  REMOVE_TO_CART,
} from "../ActionType";

const CartReduser = (state = [], action) => {
  // console.log('state>>>>>',state);
  switch (action.type) {
    case ADD_TO_CART:
      const product = state.find((item) => item.title === action.payload.title);
      // console.log("product>>>>>>>>>>>>>>>",product);
      if (product) {
        product.quantity += 1;
      // console.log("Productssssssssssssss????",state);
        const products = state.filter((item) => item.title !== action.payload.title);
        return [...products, product];
      }

      action.payload.quantity = 1;
      return [...state, action.payload];

    case REMOVE_TO_CART:
      return state.filter((item) => item.id !== action.payload.id);

    case CART_PRODUCT_QUANTITY_Up:
      action.payload.quantity += 1;

      return [...state];

    case CART_PRODUCT_QUANTITY_Down:
      if (action.payload.quantity > 0) {
        action.payload.quantity -= 1;
      }
      return [...state];

    default:
      return state;
  }
};

export default CartReduser;

// import { ADD_TO_CART } from "../ActionType";

// const initialstate = {
//     data: []
// }

// const CartReduser = (state = initialstate, action) => {
//     switch (action.type) {
//         case ADD_TO_CART:
//             return {
//                 ...state,
//                 data: [
//                     ...state.data, { data: action.payload }
//                 ]
//             }

//         default:
//             return state;
//     }
// }

// export default CartReduser;
