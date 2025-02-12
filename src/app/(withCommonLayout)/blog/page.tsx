import BlogCard from '@/components/ui/BlogCard';
import { Blog } from '@/types';
import { ServerModuler } from '@/utils';
import React from 'react'

export const metadata = {
    title: 'All Blogs | Md Abdul Adud',
    description: 'Discover all the latest blogs from My Portfolio, featuring the latest technological advancements and breakthroughs.',
    robots: "index, follow"
  
}

const BlogsPage = async() => {

    const blogs =  await ServerModuler.AllBlogs();


  return (
    <div>
      <h1 className="text-3xl text-center my-5 font-bold">
        All <span className="text-teal-600">Blogs</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          This is my blog and my guidelines are available
        </i>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        {blogs.data.map((blog : Blog, index : string) => (
          <BlogCard blog={blog} key={index}/>
        ))}
      </div>

    </div>
  )
}

export default BlogsPage
