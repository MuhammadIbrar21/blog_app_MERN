import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
  },
  reducers: {
    addBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog._id !== action.payload);
    },
  },
});

export const { addBlogs, deleteBlog } = blogSlice.actions;

export default blogSlice.reducer;
