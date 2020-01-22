import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Store } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { PopulateUser } from './store/actions/auth.actions';
import { selectAuthUsername, selectIsAuthenticated } from './store/selectors/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  isAuthenticated = false;
  username: string | null = null;

  constructor(private store: Store<IAppState>, public authService: AuthService, private changeDetectionRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.populateUser();

    this.store
      .select(selectIsAuthenticated)
      .subscribe((value: boolean) => {
        this.isAuthenticated = value;

        // this.changeDetectionRef.markForCheck();
      });

    this.store
      .select(selectAuthUsername)
      .subscribe((username: string | null) => {
        this.username = username;

        // this.changeDetectionRef.markForCheck();
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
