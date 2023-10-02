import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  email: string;
  password: string;
  isLoggedIn: boolean;
}

const storedAuthData = localStorage.getItem('authData');
const initialState: AuthState = storedAuthData
  ? JSON.parse(storedAuthData)
  : {
      email: '',
      password: '',
      isLoggedIn: false,
    };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
      localStorage.setItem('authData', JSON.stringify(state));
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
      localStorage.setItem('authData', JSON.stringify(state));
    },
    logout: (state) => {
      state.email = '';
      state.password = '';
      state.isLoggedIn = false;
      localStorage.removeItem('authData');
    },
  },
});

export const { setEmail, setLoggedIn, logout } = authSlice.actions;
export default authSlice.reducer;
