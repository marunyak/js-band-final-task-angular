import { AppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import * as User from './user.reducers';
import * as Catalog from './books.reducer';
import * as Filter from './filter.reducers';
import * as Book from './book.reducers';
import * as Cart from './cart.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
     router: routerReducer,
     user: User.userReducers,
     catalog: Catalog.booksReducers,
     filter: Filter.filterReducers,
     currentBook: Book.bookReducer,
     cart: Cart.cartReducer
};
