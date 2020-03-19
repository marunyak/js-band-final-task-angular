import {RouterReducerState} from '@ngrx/router-store';
import { User } from 'src/app/models/user.interface';
import { initialUserState } from './user.state';
import { Catalog, initialBooksState } from './books.state';
import { Filter } from 'src/app/models/filter.interface';
import { initialFilterState } from './filter.state';
import { initialBookState, Bookk } from './book.state';
import { Cart, initialCartState } from './cart.state';

export interface AppState {
     router?: RouterReducerState;
     user: User;
     catalog: Catalog;
     filter: Filter;
     currentBook: Bookk;
     cart: Cart;
}

export const initialAppState: AppState = {
     user: initialUserState,
     catalog: initialBooksState,
     filter: initialFilterState,
     currentBook: initialBookState,
     cart: initialCartState
};

export function getInitialState(): AppState {
     return initialAppState;
}
