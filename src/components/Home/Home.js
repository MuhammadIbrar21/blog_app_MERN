import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  let blogs = useSelector((store) => {
    return store.blogs.blogs;
  });

  const getYear = (date) => {
    let d = new Date(date);
    return d.getFullYear();
  };

  const getDate = (date) => {
    let d = new Date(date);
    const month = d.toLocaleString("default", { month: "short" });

    return month + " " + d.getDate();
  };

  if (blogs.length === 0)
    return (
      <h1 className="text-2xl font-bold sm:text-3xl">Blogs not available!</h1>
    );

  return (
    <div className="flex justify-center items-center flex-col gap-4">
      {blogs.map((blog) => (
        <article className="flex mx-5 mb-8 bg-white transition hover:shadow-xl">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              datetime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>{getYear(blog.createAt)}</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>{getDate(blog.createAt)}</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <img
              alt={blog.title}
              src={blog.thumbnail}
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="/">
                <h3 className="font-bold uppercase text-gray-900">
                  {blog.title}
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                {blog.content}
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <Link
                to={`/blog-details/${blog._id}`}
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                Read Blog
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Home;
