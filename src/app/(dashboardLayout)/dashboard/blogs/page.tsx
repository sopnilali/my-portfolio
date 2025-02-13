"use client"

import { useDeleteBlogMutation, useGetAllBlogsQuery } from '@/components/redux/feature/blogApi'
import { Blog } from '@/types'
import Link from 'next/link'
import React from 'react'
import { toast } from 'sonner'

const BlogsPage = () => {


    const { data: blogs } = useGetAllBlogsQuery(undefined)

    const [deleteBlog] = useDeleteBlogMutation()

    const handleDeleteBlog = async (blogId: string) => {
      // Your delete logic here

    const toastId = toast.loading('Logging in');

      const res = await deleteBlog(blogId)
      if (res) {
        toast.success('Delete Blog Successfull', { id: toastId, duration: 2000 });
      }
    }

  return (
    <div>
      <div className="py-4 text-center">
              <h1 className="text-2xl font-bold text-teal-600">All Blogs</h1>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2">S/N</th>
                    <th className="border border-gray-300 p-2">Blog Image</th>
                    <th className="border border-gray-300 p-2">Title</th>
                    <th className="border border-gray-300 p-2">Description</th>
                    <th className="border border-gray-300 p-2">Publish Date</th>
                    <th className="border border-gray-300 p-2">Author Name</th>
                    <th className="border border-gray-300 p-2">Total Likes</th>
                    <th className="border border-gray-300 p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs?.data?.length > 0 ? blogs?.data.map((blog: Blog, index: string) => (
                    <tr key={index} className="border border-gray-300 text-center">
                      <td className="p-2">{index + 1}</td>
                      <td className="p-2">
                        <img src={blog?.blog_image} alt={blog.title} className="w-16 h-16 mx-auto" />
                      </td>
                      <td className="p-2  text-left">{blog.title}</td>
                      <td className="p-2  text-left">{blog.description.length > 50
                        ? blog.description.slice(0, 50) + "..."
                        : blog.description}</td>
                      <td className="p-2  text-left">{blog.publish_date}</td>
                      <td className="p-2  text-left">{blog.author_name}</td>
                      <td className="p-2  text-left">{blog.total_likes}</td>
                      <td className="p-2  text-left">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2"><Link href={`/dashboard/blogs/${blog._id}`} >Update</Link>
                      </button>
                        <button onClick={() => handleDeleteBlog(blog._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                      </td>
                    </tr>
                  )): <tr><td colSpan={8} className="text-center">No projects found</td></tr>  }
                </tbody>
              </table>
            </div>
    </div>
  )
}

export default BlogsPage