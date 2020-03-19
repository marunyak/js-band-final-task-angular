import { createSelector } from '@ngrx/store';
import { Bookk } from '../state/book.state';

const selectBook = (state) => state.currentBook;

export const selectCurrentBook = createSelector(selectBook, (state: Bookk) => state.book);
export const selectBookLoading = createSelector(selectBook, (state: Bookk) => state.loading);
export const selectBookError  = createSelector(selectBook, (state: Bookk) => state.error);
