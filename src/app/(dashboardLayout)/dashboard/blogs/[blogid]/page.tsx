"use client"

import { useBlogDetailsQuery, useUpdateBlogMutation } from '@/components/redux/feature/blogApi'
import { Blog } from '@/types'
import { useParams } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

const UpdateBlogPage = () => {
    const id = useParams()
    const { data: BlogDetails } = useBlogDetailsQuery(id?.blogid)
    
    const [updateBLog] = useUpdateBlogMutation()

    const { register, handleSubmit, reset } = useForm<Blog>()


    const onSubmit: SubmitHandler<Blog> = async (data: Blog) => {
        const toastId = toast.loading('Logging in');


        const updateData = {
            id: id.blogid,
            data: data
        }

        const res = await updateBLog(updateData)
        if (res) {
            reset()
            toast.success('Blog Update Successfull', { id: toastId, duration: 2000 });
        }
    }


    return (
        <div>
            <div className="flex items-center justify-center  my-10">
                <div className="w-full bg-white shadow-lg rounded-lg p-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-2xl font-semibold mb-6 text-teal-600 text-center">Update Blog</h2>
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
                                    defaultValue={BlogDetails?.data?.title}
                                    {...register("title")}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                                    placeholder="Enter blog title"
                                />
                            </div>
                            {/* Author Name */}
                            <div>
                                <label
                                    htmlFor="author_name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Author Name
                                </label>
                                <input
                                    type="text"
                                    {...register("author_name")}
                                    defaultValue={BlogDetails?.data?.author_name}
                                    id="author_name"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                                    placeholder="Enter author name"
                                />
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
                                    defaultValue={BlogDetails?.data?.publish_date}
                                    id="publish_date"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                                />
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
                                    defaultValue={BlogDetails?.data?.total_likes}
                                    id="total_likes"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                                    placeholder="Enter total likes"
                                />
                            </div>
                        </div>
                        {/* Blog Image (URL Input) */}
                        <div className="my-5">
                            <label
                                htmlFor="blog_image"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Blog Image URL
                            </label>
                            <input
                                type="url"
                                id="blog_image"
                                {...register("blog_image")}
                                defaultValue={BlogDetails?.data?.blog_image}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                                placeholder="Paste image URL here"
                            />
                        </div>
                        {/* Description */}
                        <div>
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                {...register("description")}
                                defaultValue={BlogDetails?.data?.description}
                                rows={4}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                                placeholder="Enter blog description"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="mt-6 w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateBlogPage