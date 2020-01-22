import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { selectIsAuthenticated } from '../store/selectors/auth.selectors';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IsNotAuthenticatedGuardService implements CanActivate {

  constructor(private router: Router, private store: Store<IAppState>) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.pipe(
      select(selectIsAuthenticated),
      map((value: boolean) => {
        if (!value) {
          return true;
        }

        this.router.navigate(['/game']);

        return false;
      }),
      take(1)
    );
  }
}
