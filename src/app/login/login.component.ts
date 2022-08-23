import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Store, select } from '@ngrx/store';
import { LoginModel } from './login.model';
import * as LoginActions from './store/login.actions';
import * as fromLogin from './store/login.selectors';
import { Observable } from 'rxjs';
import * as fromReducer from './store/login.reducer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage = '';
  loginDetails: any;
  data: any;
  // loginDetails: Observable<LoginModel[]> | undefined;
  constructor(
    private userLogin: LoginService,
    private store: Store<fromReducer.LoginState>,
    private route: Router
  ) {}

  getUserLoginData(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log(this.store);

    this.store.dispatch(
      new LoginActions.LoadLogin({ email: email, password: password })
    );
    this.userLogin.getLoginDetails(email, password).subscribe((result) => {
      this.loginDetails = result;
      if (this.loginDetails) {
        this.route.navigate(['/property-list']);
      }
      // console.log(result.data.jwttoken);
      localStorage.setItem('user', JSON.stringify(result));
    });
    // this.loginDetails = this.store.select(fromLogin.getLoginDetails);

    form.resetForm();
  }

  ngOnInit(): void {
    // this.store.pipe(select(fromLogin.getLoginDetails)).subscribe((data) => {
    //   this.loginDetails = data;
    //   console.log(data);
    // });
    // console.log('1');
    // this.loginDetails = this.store.select(fromLogin.getLoginDetails);
    // console.log(this.loginDetails);
    // console.log('2');
  }
}
