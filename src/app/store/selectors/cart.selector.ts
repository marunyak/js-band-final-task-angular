import { createSelector } from '@ngrx/store';
import { Cart } from 'src/app/store/state/cart.state';

const selectCart = (state) => state.cart;

export const selectCartBooksList = createSelector(selectCart, ((state: Cart) => state.books))