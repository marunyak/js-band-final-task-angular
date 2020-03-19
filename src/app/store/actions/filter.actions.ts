import { Action } from '@ngrx/store';

export enum EFilterActions {
     ChangeFilter = '[Filter] ChangeFilter'
}

export class ChangeFilter implements Action {
     public readonly type = EFilterActions.ChangeFilter;
     constructor(public payload: any) {}
}

export type FilterActions = ChangeFilter;
