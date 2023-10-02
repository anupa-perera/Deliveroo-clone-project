import { RootState } from '../Store/store';

export const selectEmail = (state: RootState) => state.auth.email;
export const selectPassword = (state: RootState) => state.auth.password;
export const selectisLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectButtonDisabled = (state: RootState) =>
  state.auth.email === '' || !state.auth.email.includes('@');
export const selectButtonDisabledForPassword = (state: RootState) =>
  state.auth.password === '';
