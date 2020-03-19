import { initialBookState } from '../state/book.state';
import { BookActions, EBookActions } from '../actions/book.actions';

export const bookReducer = (
     state = initialBookState,
     action: BookActions
) => {
     switch (action.type) {
          case EBookActions.fetchBookSuccess:
               return {
                    ...state,
                    book: {...action.payload},
                    loading: false
               };
          case EBookActions.fetchBookFail:
               return {
                    ...state,
                    error: action.error,
                    loading: false,
               };
          default:
               return state;
     }
};
