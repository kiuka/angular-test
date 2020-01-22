export interface IAuthState {
  status: string
  username: string | null
}

export const initialAuthState: IAuthState = {
  status: 'unloaded',
  username: null,
};
