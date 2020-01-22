import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IAuthState } from '../state/auth.state';

export const selectAuth = (state: IAppState) => state.auth;

export const selectAuthUsername = createSelector(
  selectAuth,
  (state: IAuthState) => state.username
);

export const selectIsAuthenticated = createSelector(
  selectAuth,
  (state: IAuthState) => state.status === 'loaded'
);
