import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/LoginSignSlice";
import addToCart from "../Features/CartSlice";
import trendSlice from "../api/marketTrendApiSlice";
import SearchApi from "../api/SearchApiSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: addToCart,
    trendSlice: trendSlice,
    SearchApi: SearchApi,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
