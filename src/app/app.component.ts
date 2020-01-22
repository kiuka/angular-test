import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Store } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { PopulateUser } from './store/actions/auth.actions';
import { selectAuthUsername, selectIsAuthenticated } from './store/selectors/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isAuthenticated = false;
  username: string | null = null;

  constructor(private store: Store<IAppState>, public authService: AuthService) {
  }

  ngOnInit(): void {
    this.populateUser();

    this.store
      .select(selectIsAuthenticated)
      .subscribe((value: boolean) => {
        window.setTimeout(() => {
          this.isAuthenticated = value;
        }, 0);
      });

    this.store
      .select(selectAuthUsername)
      .subscribe((username: string | null) => {
        window.setTimeout(() => {
          this.username = username;
        }, 0);
      });
  }

  populateUser() {
    const authData = this.authService.getAuthData();

    if (!authData) {
      return;
    }

    this.store.dispatch(new PopulateUser(authData.username));
  }
}
