import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Books } from 'src/app/models/books.interface';
import { Store } from '@ngrx/store';
import { ChangeFilter } from 'src/app/store/actions/filter.actions';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filterBooks: Books[];

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onChange(event) {
    const { name, value } = event.target;
    this.store.dispatch(new ChangeFilter({ [name]: value }));
  }

}
