import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { IAppState } from '../store/state/app.state';
import { selectIsAuthenticated } from '../store/selectors/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuardService implements CanActivate {

  constructor(private router: Router, private store: Store<IAppState>) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.pipe(
      select(selectIsAuthenticated),
      map((value: boolean) => {
        if (value) {
          return true;
        }

        this.router.navigate(['/']);

        return false;
      }),
      take(1)
    );
  }
}
