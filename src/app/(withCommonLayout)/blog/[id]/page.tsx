import BlogDetailsCard from '@/components/ui/BlogDetailsCard'
import { ServerModuler } from '@/utils'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Blog Details | Md Abdul Adud',
  description: 'Read the latest blog from My Portfolio, featuring the latest technological advancements and breakthroughs.',
  keywords: "Blog Details",
  robots: "index, follow"
}


const BlogDetailsPage = async({params} : any  ) => {
    const {id}  = await params
    const blog = await ServerModuler.SingleBlogs(id)
    metadata.title = blog?.data?.blogtitle +'| Md Abdul Adud'
    metadata.description = blog?.data?.blogDescription


  return (
    <div className='mb-5'>
        <BlogDetailsCard blog={blog.data}/>
    </div>
  )
}

export default BlogDetailsPage
