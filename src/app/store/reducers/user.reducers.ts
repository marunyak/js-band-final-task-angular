import { initialUserState } from '../state/user.state';
import { UserActions, EUserActions } from '../actions/user.actions';


export const userReducers = (
     state = initialUserState,
     action: UserActions
) => {
     switch (action.type) {
          case EUserActions.SignIn: {
               return {
                    ...state,
                    ...action.payload
               };
          }
          case EUserActions.CheckIn: {
               let userData: any = localStorage.getItem('user');
               if (userData) {
                    userData = JSON.parse(userData);
                    return {...state, ...userData};
               }
               return state;
          }

          case EUserActions.SignOut: {
               localStorage.removeItem('user');
               return { ...state, ...{ username: '', avatar: '', token: ''} };
          }

          default:
               return state;
     }
};
