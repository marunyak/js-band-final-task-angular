import { Action } from '@ngrx/store';

export enum EUserActions {
     SignIn  = '[User] SignIn',
     CheckIn = '[User] CheckIn',
     SignOut = '[User] SignOut'
}

export class SignIn implements Action {
     public readonly type = EUserActions.SignIn;
     constructor(public payload: object) {}
}

export class CheckIn implements Action {
     public readonly type = EUserActions.CheckIn;
}

export class SignOut implements Action {
     public readonly type = EUserActions.SignOut;
}

export type UserActions = SignIn | CheckIn | SignOut;
