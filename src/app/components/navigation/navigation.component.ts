import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SignOut } from 'src/app/store/actions/user.actions';
import { Router } from '@angular/router';
import { selectUserAvatar, selectUsername } from 'src/app/store/selectors/user.selector';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  username: string;
  avatar: string;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.store.pipe(select(selectUserAvatar)).subscribe(res => {
      this.avatar = res;
    });
    this.store.pipe(select(selectUsername)).subscribe(res => {
      this.username = res;
    });
  }

  handleClick() {
    this.store.dispatch(new SignOut());
    this.router.navigate(['/signin']);
  }

}
