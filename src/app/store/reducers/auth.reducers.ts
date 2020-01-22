import { IAuthState, initialAuthState } from '../state/auth.state';
import { AuthActions, EAuthActions } from '../actions/auth.actions';

export const authReducers = (state = initialAuthState, action: AuthActions): IAuthState => {
  switch (action.type) {
    case EAuthActions.PopulateUser: {
      return {
        ...state,
        status: 'loaded',
        username: action.username
      }
    }

    case EAuthActions.Login: {
      return {
        ...state,
        status: 'loading',
      }
    }

    case EAuthActions.Logout: {
      return {
        ...state,
        status: 'unloaded',
        username: null,
      }
    }

    default:
      return state;
  }
};

