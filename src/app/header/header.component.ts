import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private translateService: TranslateService
  ) {}

  user: any;
  changeButton: any;

  public selectLanguage(event: any) {
    this.translateService.use(event.target.value);
    console.log(event.target.value);
  }

  logoutHandler() {
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    if (this.loginService.getLoggedIn()) {
      this.changeButton = true;
    } else {
      this.changeButton = false;
    }
  }
}
