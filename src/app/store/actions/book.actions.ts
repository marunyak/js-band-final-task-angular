import { Action } from '@ngrx/store';

export enum EBookActions {
     fetchBookSuccess = '[Book] fetchBookSuccess',
     fetchBookFail = '[Book] fetchBookFail'
}

export class FetchBookSuccess implements Action {
     public readonly type = EBookActions.fetchBookSuccess;
     constructor(public payload: any) {}
}

export class FetchBookFail implements Action {
     public readonly type = EBookActions.fetchBookFail;
     constructor(public error: any) {}
}

export type BookActions =  FetchBookSuccess | FetchBookFail;
