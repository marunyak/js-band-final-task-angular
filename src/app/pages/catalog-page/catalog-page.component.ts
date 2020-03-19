import { Component, OnInit, Input } from '@angular/core';
import { Books } from 'src/app/models/books.interface';
import { BooksService } from 'src/app/store/services/books.service';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { FetchBooks, FetchBooksSuccess, FetchBooksFail } from 'src/app/store/actions/books.actions';
import { selectBooksLoading } from 'src/app/store/selectors/books.selector';
import { selectSearch, selectPrice } from 'src/app/store/selectors/filter.selector';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {

  @Input() searchFilter = '';
  @Input() selectFilter: string;

  selectOptions: any[] = [
    { name: 'none', value: 'Price' },
    { name: 'low_price', value: '0 < Price < 15' },
    { name: 'medium_price', value: '15 < Price < 30' },
    { name: 'high_price', value: 'Price > 30' },
  ];

  books: Books[];
  filteredBooks: Books[];
  loading = true;

  constructor(private booksService: BooksService,
              private store: Store,
              private router: Router,
              private auth: AuthService) {}

  onChanged() {

  }

  ngOnInit(): void {
    this.booksService.getBooksFetch().subscribe(res => {
      this.store.dispatch(new FetchBooks());
      this.store.dispatch(new FetchBooksSuccess(res));
      this.books = res;
      this.filteredBooks = this.books;
      this.store.pipe(select(selectBooksLoading)).subscribe((res) => {
        this.loading = res;
      });
    }, err => {
      if (err.status === 401) {
          localStorage.removeItem('user');
          this.auth.logout();
          this.router.navigate(['/signin']);
        } else {
          this.store.dispatch(new FetchBooksFail(err));
        }
    });
  }

}
