import { initialTestState, ITestState } from '../state/test.state';
import { ETestActions, TestActions } from '../actions/test.actions';

export const testReducers = (state = initialTestState, action: TestActions): ITestState => {
  switch (action.type) {
    case ETestActions.SetTest: {
      return {
        ...state,
        message: action.message
      }
    }

    default:
      return state
  }
}

