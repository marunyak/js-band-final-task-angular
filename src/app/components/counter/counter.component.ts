import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddToCart } from 'src/app/store/actions/cart.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() selectBook: any;
  id: string;
  title: string;
  price: number;
  totalPrice: any;
  countBooks = 1;
  tempValue = 1;
  count = 1;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    const { id, title, count, price } = this.selectBook;
    this.id = id;
    this.title = title;
    this.count = count;
    this.price = price;
    this.totalPrice = price;
  }

  handleChange = ({ target: { name, value } }) => {
    const { count } = this.selectBook;

    if (value > count) {
      this.countBooks = this.tempValue;
    } else {
      this.countBooks = value;
      this.tempValue  = value;
      this.totalPrice = this.countBooks > 1 ? (this.countBooks * this.price).toFixed(2) : this.price.toFixed(2);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.store.dispatch(new AddToCart({
      id: this.id,
      title: this.title,
      price: this.price,
      count: this.countBooks
    }));
  }
}
