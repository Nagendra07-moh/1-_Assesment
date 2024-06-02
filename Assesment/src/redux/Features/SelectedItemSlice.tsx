import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItem: [],
};

const selectedItemSlice = createSlice({
  name: "SelectedItem",
  initialState,
  reducers: {
    addItem: (state, action: any): any => {
      state.selectedItem.push(action.payload);
    },
    clearItems: (state): any => {
      state.selectedItem = [];
    },
  },
});

export const { addItem, clearItems } = selectedItemSlice.actions;
export default selectedItemSlice.reducer;
