import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectCartBooksList } from 'src/app/store/selectors/cart.selector'
import { CartService } from 'src/app/store/services/cart.service';
import { PurchaseSuccess, PurchaseFail  } from 'src/app/store/actions/cart.actions';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  books: any = [];
  totalPrice: any;

  constructor(private store: Store,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.store.pipe(select(selectCartBooksList)).subscribe(res => {
      this.books = res;
      this.totalPrice = this.books.length > 0
      ? this.books.reduce((sum, item) => (sum + (item.count * item.price)), 0).toFixed(2) : null
    });
  }

  purchase() {
    const list = this.books.map((item) => item.id);
    this.cartService.addPurchase({ books: list }).subscribe(res => {
      this.store.dispatch(new PurchaseSuccess({ books: list }));
    },(err) => {
      this.store.dispatch(new PurchaseFail(err));
    });
  }

}
