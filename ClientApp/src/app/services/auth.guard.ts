import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /*constructor(private user:UserService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.user.getUserLoggedIn();
  }*/

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (this.authService.isAuthenticated()) {
      
          if (next.data!=null && next.data.role!=null)
          {
              return this.authService.hasRole(next.data.role);
          }
          return true;
      }

      // navigate to login page
      this.router.navigate(['/home']);
      // you can save redirect url so after authing we can move them back to the page they requested
      return false;
  }
  
}
