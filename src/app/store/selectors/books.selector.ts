import { createSelector } from '@ngrx/store';
import { Catalog } from '../state/books.state';

const selectBooks = (state) => state.catalog;

export const selectBooksList    = createSelector(selectBooks, (state: Catalog) => state.books);
export const selectBooksLoading = createSelector(selectBooks, (state: Catalog) => state.loading);
export const selectBooksError   = createSelector(selectBooks, (state: Catalog) => state.error);
