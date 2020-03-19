import { initialBooksState } from '../state/books.state';
import { BooksActions, EBooksActions } from '../actions/books.actions';

export const booksReducers = (
     state = initialBooksState,
     action: BooksActions ) => {

     switch (action.type) {
          case EBooksActions.fetchBooks: {
               return {
                    ...state,
                    loading: true,
               };
          }

          case EBooksActions.fetchBooksSuccess: {
               return {
                    ...state,
                    books: [...action.payload],
                    loading: false,
               };
          }

          case EBooksActions.fetchBooksFail: {
               return {
                    ...state,
                    error: action.error,
                    loading: false,
               };
          }

          default:
               return state;
     }
};
