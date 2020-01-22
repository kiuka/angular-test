import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { IAuthDataInterface } from '../interfaces/auth-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  key = 'auth';

  constructor() {
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
    // should check if username and password is valid

    const data: IAuthDataInterface = {
      username,
      token: 'ok'
    };

    localStorage.setItem(this.key, JSON.stringify(data));

    return of(data);
  }

  logout(): void {
    localStorage.removeItem(this.key);
  }

  isAuthenticated(): boolean {
    const data = this.getAuthData();

    if (!data) {
      return false;
    }

    return data.token === 'ok';
  }
}
