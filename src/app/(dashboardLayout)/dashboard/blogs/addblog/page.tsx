"use client"

import { useCreateBlogMutation } from '@/components/redux/feature/blogApi';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner';

type TBlogInputs = {
  title: string;
  description: string;
  publish_date: string;
  category: string;
  blog_image: string;
  total_likes: string;
}

const AddBlogPages = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TBlogInputs>()

  const [addblog] = useCreateBlogMutation();

  const onSubmit: SubmitHandler<TBlogInputs> = async (data) => {
    const toastId = toast.loading('Logging in');
    const res = await addblog(data)
    if (res) {
      reset()
      toast.success('Blog Add Successfull', { id: toastId, duration: 2000 });
    }

  }


  return (
    <>
      <div className="flex items-center justify-center  my-10">
        <div className="w-full bg-white shadow-lg rounded-lg p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl font-semibold mb-6 text-teal-600 text-center">Create Blog</h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >Title</label>
                <input
                  type="text"
                  id="title"
                  {...register("title")}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                  placeholder="Enter blog title"
                />
                {errors.title?.type === "required" && (
                  <p role="alert" className='text-red-500'>Title is required</p>
                )}
              </div>
              {/* Author Name */}
              <div>
                <label
                  htmlFor="author_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category Name
                </label>
                <input
                  type="text"
                  {...register("category")}
                  id="category"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                  placeholder="Enter category name"
                />
                {errors.category?.type === "required" && (
                  <p role="alert" className='text-red-500'>Category Name is required</p>
                )}
              </div>
              {/* Publish Date */}
              <div>
                <label
                  htmlFor="publish_date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Publish Date
                </label>
                <input
                  type="date"
                  {...register("publish_date")}
                  id="publish_date"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                />
                {errors.publish_date?.type === "required" && (
                  <p role="alert" className='text-red-500'>Publish date is required</p>
                )}
              </div>
              {/* Total Likes */}
              <div>
                <label
                  htmlFor="total_likes"
                  className="block text-sm font-medium text-gray-700"
                >
                  Total Likes
                </label>
                <input
                  type="number"
                  {...register("total_likes")}
                  id="total_likes"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                  placeholder="Enter total likes"
                />
                {errors.total_likes?.type === "required" && (
                  <p role="alert" className='text-red-500'>Total likes is required</p>
                )}
              </div>
            </div>
            {/* Blog Image (URL Input) */}
            <div className="my-5">
              <label
                htmlFor="blog_image"
                className="block text-sm font-medium text-gray-700"
              >
                Image URL
              </label>
              <input
                type="url"
                id="blog_image"
                {...register("blog_image")}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Paste image URL here"
              />
              {errors.blog_image?.type === "required" && (
                <p role="alert" className='text-red-500'>Blog image is required</p>
              )}
            </div>
            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Content
              </label>
              <textarea
                id="description"
                {...register("description")}
                rows={4}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter blog Content"
              ></textarea>
              {errors.description?.type === "required" && (
                <p role="alert" className='text-red-500'>Content is required</p>
              )}
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Create
            </button>
          </form>
        </div>
      </div>

    </>
  )
}

export default AddBlogPages