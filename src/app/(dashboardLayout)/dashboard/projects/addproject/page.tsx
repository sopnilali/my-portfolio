
"use client"
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
    projectitle: string;
    projectDescription: string;
    projectTools: string;
    projectImage: string;
    githubFrontEnd: string;
    liveUrl: string;
    githubBackEnd: string;
    projectDuration: string;
    projectStatus: string;
  }

const ProjectAddPage = () => {

    const {
        register,
        handleSubmit,
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
      }


  return (
    <div>

<div className="flex items-center justify-center min-h-screen my-10">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl font-semibold mb-6 text-teal-600 text-center">
              Create Project
            </h2>
            <div className="my-5">
              <label
                htmlFor="blog_image"
                className="block text-sm font-medium text-gray-700"
              >
                Project Title
              </label>
              <input
                type="text"
                id="blog_image"
                {...register('projectitle')}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Paste image URL here"
              />
            </div>
            <div className="my-5">
              <label
                htmlFor="projectTools"
                className="block text-sm font-medium text-gray-700"
              >
                Project Tools
              </label>
              <input
                type="text"
                id="projectTools"
                {...register('projectTools')}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Paste image URL here"
              />
            </div>
            <div className="my-5">
              <label
                htmlFor="projectImage"
                className="block text-sm font-medium text-gray-700"
              >
                Project Image URL
              </label>
              <input
                type="text"
                id="projectImage"
                {...register('projectImage')}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Paste image URL here"
              />
            </div>
            <div className="my-5">
              <label
                htmlFor="githubFrontEnd"
                className="block text-sm font-medium text-gray-700"
              >
                Github Front End URL
              </label>
              <input
                type="text"
                id="githubFrontEnd"
                {...register('githubFrontEnd')}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Paste image URL here"
              />
            </div>
            <div className="my-5">
              <label
                htmlFor="githubBackEnd"
                className="block text-sm font-medium text-gray-700"
              >
                Blog Back End URL
              </label>
              <input
                type="text"
                id="githubBackEnd"
                {...register('githubBackEnd')}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Paste image URL here"
              />
            </div>
            <div className="my-5">
              <label
                htmlFor="liveUrl"
                className="block text-sm font-medium text-gray-700"
              >
               Live URL
              </label>
              <input
                type="text"
                id="liveUrl"
                {...register('liveUrl')}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Paste image URL here"
              />
            </div>
            <div className="my-5">
              <label
                htmlFor="projectDuration"
                className="block text-sm font-medium text-gray-700"
              >
                Project Duration
              </label>
              <input
                type="text"
                id="projectDuration"
                {...register('projectDuration')}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Paste image URL here"
              />
            </div>
            <div className="my-5">
              <label
                htmlFor="projectStatus"
                className="block text-sm font-medium text-gray-700"
              >
                Project Status
              </label>
              <select {...register('projectStatus')} className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500' name='projectStatus'>
                <option value="">Select Status</option>
                <option value="inprocess">In-Process</option>
                <option value="completed">Completed</option>
              </select>

            </div>
            {/* Description */}
            <div>
              <label
                htmlFor="projectDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="projectDescription"
                {...register('projectDescription')}
                rows={4}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter blog description"
              ></textarea>
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

    </div>
  )
}

export default ProjectAddPage