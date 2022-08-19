import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userLogin: LoginService) {}

  getUserLoginData(data: any) {
    this.userLogin.login(data).subscribe((result) => {
      console.log(result);
    });
  }

  ngOnInit(): void {}
}
