import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import Blogs from "./components/Blogs/Blogs";
import AddBlog from "./components/AddBlog/AddBlog";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addBlogs } from "./store/slices/blogSlice";

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    axios.get("/blog/blogs").then((res) => {
      if (res.data.success) {
        dispatch(addBlogs(res.data.blogs));
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/addblog" element={<AddBlog />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
