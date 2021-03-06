import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/service/auth/auth-service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})

export class SuperAdminRoleGuardService implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot):
    boolean |
    UrlTree |
    Promise<boolean | UrlTree> |
    Observable<boolean | UrlTree> {
      return this._authService.User.pipe(
        take(1),
        map(
          user => {
            const role = user.roleId;
            if (role == 1) {
              return true;
            } else {
              this._router.createUrlTree(['/']);
            }
          }
        )
      )
    }
}
