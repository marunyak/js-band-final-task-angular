import { Pipe, PipeTransform } from '@angular/core';
import { selectSearch, selectPrice } from './store/selectors/filter.selector';
import { Store, select } from '@ngrx/store';
import { ChangeFilter } from './store/actions/filter.actions';

@Pipe({
  name: 'filter1',

})
export class Filter1Pipe implements PipeTransform {

  constructor(private store: Store) {}

  transform(items: any[], selectFilter: string): unknown {

    let search = '';
    let price = '';

    if (!items) {
      return [];
    }

    if (!selectFilter) {
      return items;
    }

    this.store.dispatch(new ChangeFilter({ ['price']: selectFilter }));

    this.store.pipe(select(selectSearch)).subscribe(res => {
      search = res;
    });

    this.store.pipe(select(selectPrice)).subscribe(res => {
      price = res;
    });

    const result = items.filter((item) => (search === '' || item.title.toLowerCase()
                                  .search(new RegExp(`^${search.toLowerCase()}`, 'g')) !== -1))
                                  .filter((item) => (this.priceTypes(price, item.price)));
    return result;
  }


  priceTypes = (type, price) => {
    const types = {
      none: price,
      low_price: price > 0 && price < 15,
      medium_price: price > 15 && price < 30,
      high_price: price > 30
    };
    return types[type];
  }


}
