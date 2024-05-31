import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { email: "Nagendra@gmail.com", password: "12345" },
    { email: "nagendra@gmail.com", password: "12345" },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: any): any => {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
