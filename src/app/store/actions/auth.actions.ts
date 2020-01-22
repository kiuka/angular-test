import { Action } from '@ngrx/store';

export enum EAuthActions {
  Login = '[Auth] Login',
  Logout = '[Auth] Logout',
  PopulateUser = '[Auth] Populate user',
}

export class Login implements Action {
  public readonly type = EAuthActions.Login;
}

export class Logout implements Action {
  public readonly type = EAuthActions.Logout;
}

export class PopulateUser implements Action {
  public readonly type = EAuthActions.PopulateUser;

  constructor(public username: string) {
  }
}

export type AuthActions = Login | Logout | PopulateUser
