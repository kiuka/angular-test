import { initialTestState, ITestState } from './test.state';

export interface IAppState {
  test: ITestState
}

export const initialAppState: IAppState = {
  test: initialTestState
}

export const getInitialState = (): IAppState => {
  return initialAppState
}
