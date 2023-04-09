import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "accounts",
  initialState: {
    isLogout: false,
    account: {
      email: "tungocvan@gmail.com",
      password: "123",
    },
  },
  reducers: {
    isLogout(state, action) {
      //console.log(("Login user: ", action.payload));
      state.isLogout = true;
      return state;
    },
    Logout(state) {
      state.isLogout = false;
      return state;
    },
  },
});

//const { actions, reducer } = todoSlice;
// Reducer
const accountsReducer = accountSlice.reducer;
// Selector
export const accountsSelector = (state) => {
  return state.accounts;
};
export const isLogoutSelector = (state) => {
  return state.accounts.isLogout;
};
//export const { markComplete } = productSlice.actions;
export default accountsReducer;
export const { isLogout } = accountSlice.actions;
