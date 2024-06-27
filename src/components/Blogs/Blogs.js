import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBlog } from "../../store/slices/blogSlice";

const Blogs = () => {
  let blogs = useSelector((store) => {
    return store.blogs.blogs;
  });

  let dispatch = useDispatch();

  if (blogs.length === 0) return <h1>Blogs not available!</h1>;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Image
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Title
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Author
              </th>
              <th className="px-4 py-2">Edit / Delete</th>
            </tr>
          </thead>

          <tbody className="divide-y text-left divide-gray-200">
            {blogs.map((blog) => (
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  <img
                    alt={blog.title}
                    src={blog.thumbnail}
                    className="aspect-square h-full w-[150px] object-cover"
                  />
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {blog.title}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {blog.author}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <Link
                    to={`/edit/${blog._id}`}
                    className="me-5 inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Edit
                  </Link>
                  <button
                    className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                    onClick={() => {
                      axios
                        .delete(`/blog/deleteblog/${blog._id}`)
                        .then((res) => {
                          if (res.data.success) {
                            dispatch(deleteBlog(blog._id));
                          }
                        });
                    }}
                  >
                    DEL
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blogs;
