import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/store/services/book.service';
import { Store, select } from '@ngrx/store';
import { AuthService } from 'src/app/auth.service';
import { FetchBookSuccess, FetchBookFail } from 'src/app/store/actions/book.actions';
import { Books } from 'src/app/models/books.interface';
import { selectBookLoading, selectBookError } from 'src/app/store/selectors/book.selector';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {

  private id: number;
  public book: Books;
  public tags: any;
  public loading = true;
  public error = '';

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private store: Store,
              private router: Router,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => (this.id = params.id)
    );
    this.bookService.getBookFetch(this.id).subscribe(res => {
      this.store.dispatch(new FetchBookSuccess(res));
      this.book = res;
      this.tags = res.tags.map((item) => item).join(', ');

      this.store.pipe(select(selectBookLoading)).subscribe((res) => {
        this.loading = res;
      });
      this.store.pipe(select(selectBookError)).subscribe((res) => {
        this.error = res;
      });
    }, err =>  {
      if (err.status === 401) {
        localStorage.removeItem('user');
        this.auth.logout();
        this.router.navigate(['/signin']);
      } else {
        this.store.dispatch(new FetchBookFail(err));
      }
    });

  }

}
