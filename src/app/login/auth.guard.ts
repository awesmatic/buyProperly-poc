import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.loginService.getLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   router: RouterStateSnapshot) : Observable<boolean>  | Promise<boolean > | boolean |  {
  //   return this.loginService.user.pipe(map(user => {
  //     return !!user;
  //   }),
  //   tap(isLogin => {
  //     if(isLogin){
  //       this.router.navigate(['/login'])
  //     }
  //   })
  //   )
  // }
}
