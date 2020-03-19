import { Action } from '@ngrx/store';

export enum ECart {
     addToCart = '[Cart] AddToCart',
     purchaseSuccess = '[Cart] PurchaseSuccess',
     purchaseFail = '[Cart] PurchaseFail'
}

export class AddToCart implements Action {
     public readonly type = ECart.addToCart;
     constructor(public payload: any) {}
}

export class PurchaseSuccess implements Action {
     public readonly type = ECart.purchaseSuccess;
     constructor(public payload: any) {}
}

export class PurchaseFail implements Action {
     public readonly type = ECart.purchaseFail;
     constructor(public payload: any) {}
}

export type CartActions = AddToCart | PurchaseSuccess | PurchaseFail;
