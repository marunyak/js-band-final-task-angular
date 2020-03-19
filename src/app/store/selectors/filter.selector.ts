import { createSelector } from '@ngrx/store';
import { Filter } from 'src/app/models/filter.interface';

const selectFilter = (state) => state.filter;

export const selectSearch = createSelector(selectFilter, ((state: Filter) => state.search));
export const selectPrice  = createSelector(selectFilter, ((state: Filter) => state.price));
