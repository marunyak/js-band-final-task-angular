import { CartActions, ECart } from '../actions/cart.actions';
import { initialCartState } from '../state/cart.state';

export const cartReducer = (
     state = initialCartState,
     action: CartActions
) => {
     const { type, payload } = action;
     switch (type) {

     case ECart.addToCart: {
          let isCheck = false;

          if (state.books.length > 0) {

               const list = state.books.map((item) => {
                    if (item.id === payload.id) {
                         isCheck = true;
                         item = { ...item, count: payload.count };
                    }
                    return item;
               });

               if (isCheck) {
                    return { ...state, books: list };
               }

               return {
                    ...state,
                    books: [...state.books, payload]
               };
          }
          return {
               ...state,
               books: [...state.books, payload]
          };
     }

     case ECart.purchaseSuccess: {
          console.log(payload.message);
          return {
          ...initialCartState, message: payload.message
          };
     }
     case ECart.purchaseFail: {
          console.log(payload.message);
          return {
          ...state,
          message: payload.message
          };
     }
     default:
          return state;
     }
};
