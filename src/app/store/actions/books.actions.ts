import { Action } from '@ngrx/store';

export enum EBooksActions {
     fetchBooks = '[Catalog] fetchBooks',
     fetchBooksSuccess = '[Catalog] fetchBooksSuccess',
     fetchBooksFail = '[Catalog] fetchBooksFail',
}

export class FetchBooks implements Action {
     public readonly type = EBooksActions.fetchBooks;
}

export class FetchBooksSuccess implements Action {
     public readonly type = EBooksActions.fetchBooksSuccess;
     constructor(public payload: any) {}
}

export class FetchBooksFail implements Action {
     public readonly type = EBooksActions.fetchBooksFail;
     constructor(public error: any) {}
}

export type BooksActions = FetchBooks | FetchBooksSuccess | FetchBooksFail;
