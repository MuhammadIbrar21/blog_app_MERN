import blogReducer from "./slices/blogSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
  },
});
