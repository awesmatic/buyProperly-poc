import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userLogin: LoginService) {}

  getUserLoginData(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);

    this.userLogin.login({ email, password }).subscribe((result) => {
      console.log(result);
      form.resetForm();
    });
  }

  ngOnInit(): void {}
}
