import { initialFilterState } from '../state/filter.state';
import { EFilterActions, FilterActions } from '../actions/filter.actions';

export const filterReducers = (
     state = initialFilterState,
     action: FilterActions
) => {
     switch (action.type) {
          case EFilterActions.ChangeFilter: {
               return {
                    ...state,
                    ...action.payload
               };
          }

          default:
               return state;
     }
};
