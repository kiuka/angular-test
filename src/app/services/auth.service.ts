import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { IAuthDataInterface } from '../interfaces/auth-data.interface';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { Login, Logout, PopulateUser } from '../store/actions/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  key = 'auth';

  constructor(private store: Store<IAppState>) {
  }

  getAuthUsername(): string | null {
    const data = this.getAuthData();

    if (!data) {
      return null;
    }

    return data.username;
  }

  getAuthData(): IAuthDataInterface | null {
    const token = localStorage.getItem(this.key);

    if (!token) {
      return null;
    }

    try {
      return JSON.parse(localStorage.getItem(this.key));

    } catch (e) {
      // invalid data in localstorage

      return null;
    }
  }

  login(username: string, password: string) {
    this.store.dispatch(new Login());

    const data: IAuthDataInterface = {
      username,
      token: 'ok'
    };

    localStorage.setItem(this.key, JSON.stringify(data));

    this.store.dispatch(new PopulateUser(data.username));

    return of(data);
  }

  logout(): void {
    this.store.dispatch(new Logout());

    localStorage.removeItem(this.key);
  }
}
