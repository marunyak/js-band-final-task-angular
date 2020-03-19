import { CartBook } from 'src/app/models/cart.interface';

export interface Cart {
   books: CartBook[];
   message: any;
}

export const initialCartState: Cart = {
     books: [],
     message: undefined
};
