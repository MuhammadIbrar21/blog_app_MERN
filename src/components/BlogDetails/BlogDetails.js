import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  const blogs = useSelector((store) => {
    return store.blogs.blogs;
  });

  let thisBlog = blogs.find((blog) => blog._id === id);

  return (
    <div className="flex justify-center px-10 text-left items-center flex-col">
      <img className="w-1/2" src={thisBlog.thumbnail} alt={thisBlog.title} />
      <h1 className="text-2xl font-bold sm:text-3xl">{thisBlog.title}</h1>
      <h5 className="text-md text-left font-thin italic m:text-3xl">
        {thisBlog.author}
      </h5>
      <p className="text-lg">{thisBlog.content}</p>
    </div>
  );
};

export default BlogDetails;
