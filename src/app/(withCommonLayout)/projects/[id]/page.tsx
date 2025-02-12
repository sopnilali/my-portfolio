
import { ServerModuler } from '@/utils'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata : Metadata = {

    title: 'Project Details | NexaBlog',
    description: 'Check out the details of a specific project on NexaBlog.',
    robots: "index, follow"

}

const ProjectDetailsPage = async({params}: any) => {

    const {id} = await params

    const project = await ServerModuler.ProjectDetails(id)
    metadata.title = project?.data?.projecttitle +' | Md Abdul Adud'
    metadata.description = project?.data?.projectdescription

  return (
    <div>
      <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{project?.data?.title}</h1>
      <Image src={project?.data?.image} height={300} width={700} alt={project?.data?.title} className="w-full h-64 object-contain mb-4" />
      <p className="text-gray-700 mb-4">{project?.data?.descriptions}</p>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Tools Used</h2>
        <p>{project?.data?.tools}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Project Duration</h2>
        <p>{project?.data?.projectduration}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Project Status</h2>
        <p>{project?.data?.projectstatus}</p>
      </div>
      <div className="mb-4 ">
        <h2 className="text-xl font-semibold mb-4">Links</h2>
        <div className='flex flex-col md:flex-row md:gap-0 gap-2 '>
        <Link href={project?.data?.githubfrontend} className="text-white py-2 rounded text-center hover:bg-emerald-500 px-2 mr-4 bg-emerald-700 ">Frontend GitHub</Link>
        <Link href={project?.data?.githubbackend} className="text-white py-2 rounded text-center  hover:bg-blue-500 px-2 mr-4 bg-blue-600">Backend GitHub</Link>
        <Link href={project?.data?.livelink} className="text-white py-2 rounded text-center hover:bg-yellow-500 px-2 mr-4 bg-yellow-600">Live URL</Link>
        </div>
      </div>
    </div>


    </div>
  )
}

export default ProjectDetailsPage
