import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();

  const saveData = (data) => {
    let formdata = new FormData();
    formdata.append("title", data.title);
    formdata.append("author", data.author);
    formdata.append("content", data.content);
    formdata.append("thumbnail", data.thumbnail[0]);

    axios.post("/blog/createblog", formdata).then((res) => {
      if (res.data.success) {
        toast.success("Blog created successfully", {
          position: "bottom-right",
        });
        reset();
      } else {
        toast.error("Blog not created!", {
          position: "bottom-left",
        });
      }
    });
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Create New Blog</h1>
      </div>

      <form
        onSubmit={handleSubmit(saveData)}
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
        <div>
          <label htmlFor="email" className="sr-only">
            Title
          </label>

          <div className="relative">
            <input
              type="text"
              {...register("title", { required: true })}
              className="w-full rounded-lg border-gray-200 border p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter Title"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Author
          </label>

          <div className="relative">
            <input
              type="text"
              {...register("author", { required: true })}
              className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter Author Name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Content
          </label>

          <div className="relative">
            <textarea
              type="text"
              {...register("content", { required: true })}
              className="w-full h-40 rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter Content"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Thumbnail
          </label>

          <div className="relative">
            <input
              type="file"
              {...register("thumbnail", { required: true })}
              className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-block rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white"
          >
            Save Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
