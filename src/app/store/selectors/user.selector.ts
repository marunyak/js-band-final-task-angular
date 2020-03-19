import { createSelector } from '@ngrx/store';
import { User } from 'src/app/models/user.interface';

const selectUser = (state) => state.user;

export const selectUsername   = createSelector(selectUser, ((state: User) => state.username));
export const selectUserAvatar = createSelector(selectUser, ((state: User) => state.avatar));
export const selectUserToken  = createSelector(selectUser, ((state: User) => state.token));
