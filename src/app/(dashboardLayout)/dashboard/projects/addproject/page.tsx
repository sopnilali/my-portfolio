
"use client"
import { useCreateProjectMutation } from '@/components/redux/feature/projectApi';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner';

type Inputs = {
  title: string;
  descriptions: string;
  tools: string;
  image: string;
  githubfrontend: string;
  livelink: string;
  githubbackend: string;
  projectduration: string;
  projectstatus: string;
}

const ProjectAddPage = () => {

  const {register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()

  const [addproject] = useCreateProjectMutation()




  const onSubmit: SubmitHandler<Inputs> = async(data) => {
    const toastId = toast.loading('Logging in');


    const res = await addproject(data)
        if (res) {
          reset()
          toast.success('Project Add Successfull', { id: toastId, duration: 2000 });
        }
  }


  return (
    <div>

      <div className="flex items-center justify-center min-h-screen my-10">
        <div className="w-full bg-white shadow-lg rounded-lg p-6">
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
                {...register('title', { required: true })}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Project Title here"
              />
              {errors.title?.type === "required" && (
                <p role="alert" className='text-red-500'>Title is required</p>
              )}
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
                id="tools"
                {...register('tools', { required: true })}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Project Tools here"
              />
              {errors.tools?.type === "required" && (
                <p role="alert" className='text-red-500'>Tools is required</p>
              )}
            </div>
            <div className="my-5">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Project Image URL
              </label>
              <input
                type="url"
                id="image"
                {...register('image', { required: true })}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Project Image URL"
              />
              {errors.image?.type === "required" && (
                <p role="alert" className='text-red-500'>Project Image is required</p>
              )}
            </div>
            <div className="my-5">
              <label
                htmlFor="githubfrontend"
                className="block text-sm font-medium text-gray-700"
              >
                Github Front End URL
              </label>
              <input
                type="url"
                id="githubfrontend"
                {...register('githubfrontend', { required: true })}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Github Front End URL here"
              />
               {errors.githubfrontend?.type === "required" && (
                <p role="alert" className='text-red-500'>Github front end is required</p>
              )}
            </div>
            <div className="my-5">
              <label
                htmlFor="githubbackend"
                className="block text-sm font-medium text-gray-700"
              >
                Github Back End URL
              </label>
              <input
                type="url"
                id="githubbackend"
                {...register('githubbackend', { required: true })}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Blog Back End URL here"
              />
              {errors.githubbackend?.type === "required" && (
                <p role="alert" className='text-red-500'>Github back end is required</p>
              )}
            </div>
            <div className="my-5">
              <label
                htmlFor="livelink"
                className="block text-sm font-medium text-gray-700"
              >
                Live Link
              </label>
              <input
                type="url"
                id="livelink"
                {...register('livelink', { required: true })}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Live Link here"
              />
              {errors.livelink?.type === "required" && (
                <p role="alert" className='text-red-500'>Live Link is required</p>
              )}
            </div>
            <div className="my-5">
              <label
                htmlFor="projectduration"
                className="block text-sm font-medium text-gray-700"
              >
                Project Duration
              </label>
              <input
                type="text"
                id="projectduration"
                {...register('projectduration', { required: true })}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Project Duration here"
              />
               {errors.projectduration?.type === "required" && (
                <p role="alert" className='text-red-500'>Project duration is required</p>
              )}
            </div>
            <div className="my-5">
              <label
                htmlFor="projectstatus"
                className="block text-sm font-medium text-gray-700"
              >
                Project Status
              </label>
              <select {...register("projectstatus", { required: true })} className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500'>
                <option value="">Select Status</option>
                <option value="In-Process">In-Process</option>
                <option value="Completed">Completed</option>
              </select>
              {errors.projectstatus?.type === "required" && (
                <p role="alert" className='text-red-500'>Project status is required</p>
              )}
            </div>
            {/* Description */}
            <div>
              <label
                htmlFor="descriptions"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="descriptions"
                {...register('descriptions')}
                rows={4}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter Project description"
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