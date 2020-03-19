import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/store/services/user.service';
import { Store, select } from '@ngrx/store';
import { SignIn, CheckIn } from 'src/app/store/actions/user.actions';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { selectUserToken } from 'src/app/store/selectors/user.selector';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {

  form: FormGroup;

  constructor(private userService: UserService,
              private store: Store,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(16)])
    });

    this.store.dispatch(new CheckIn());

    this.store.pipe(select(selectUserToken)).subscribe(res => {
      if (res) {
        this.authService.login();
        this.router.navigate(['/books']);
      } else {
        this.router.navigate(['/signin']);
      }
    });

  }

  submit() {
    if (this.form.valid) {
      const formData = { ...this.form.value };
      const username = formData.username;

      this.userService.getUser(username).subscribe(
        result => {
          localStorage.setItem('user', JSON.stringify(result));
          this.store.dispatch(new SignIn(result));
          this.authService.login();
          this.router.navigate(['/books']);
        },
        err => console.log(err)
      );
    }
  }

}
