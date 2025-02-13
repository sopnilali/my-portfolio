"use client"

import { useProjectDetailsQuery, useUpdateProjectMutation } from '@/components/redux/feature/projectApi';
import { Tproject } from '@/types';
import { useParams } from 'next/navigation';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const ProjectUpdatePage = ()  => {

    const id = useParams()
    console.log(id.id)

    const {data: ProjectDetails} = useProjectDetailsQuery(id?.id)

    const [updateProject] = useUpdateProjectMutation()


      const {register,  handleSubmit, reset } = useForm<Tproject>()


    const onSubmit :SubmitHandler<Tproject> = async (data : Tproject) => {
        const toastId = toast.loading('Logging in');


        const updateData = {
            id: id.id,
            data: data
        }

        const res = await updateProject(updateData)
        if (res) {
            reset()
            toast.success('Project Update Successfull', { id: toastId, duration: 2000 });
        }
    }

    return (
        <div>

            <div className="flex items-center justify-center min-h-screen my-10">
                <div className="w-full bg-white shadow-lg rounded-lg p-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-2xl font-semibold mb-6 text-teal-600 text-center">
                            Update Project
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
                                id="title"
                                defaultValue={ProjectDetails?.data?.title}
                                {...register('title', { required: true })}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                                placeholder="Project Title here"
                            />
                        </div>
                        <div className="my-5">
                            <label
                                htmlFor="tools"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Project Tools
                            </label>
                            <input
                                type="text"
                                id="tools"
                                defaultValue={ProjectDetails?.data?.tools}
                                {...register('tools', { required: true })}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                                placeholder="Project Tools here"
                            />
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
                                defaultValue={ProjectDetails?.data?.image}
                                {...register('image', { required: true })}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                                placeholder="Project Image URL"
                            />
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
                                defaultValue={ProjectDetails?.data?.githubfrontend}
                                {...register('githubfrontend', { required: true })}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                                placeholder="Github Front End URL here"
                            />
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
                                defaultValue={ProjectDetails?.data?.githubbackend}
                                {...register('githubbackend', { required: true })}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                                placeholder="Blog Back End URL here"
                            />
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
                                defaultValue={ProjectDetails?.data?.livelink}
                                {...register('livelink', { required: true })}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                                placeholder="Live Link here"
                            />
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
                                defaultValue={ProjectDetails?.data?.projectduration}
                                {...register('projectduration', { required: true })}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                                placeholder="Project Duration here"
                            />
                        </div>
                        <div className="my-5">
                            <label
                                htmlFor="projectstatus"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Project Status
                            </label>
                            <select defaultValue={ProjectDetails?.data?.projectstatus} {...register("projectstatus", { required: true })} className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500'>
                                <option value="">Select Status</option>
                                <option value="In-Process">In-Process</option>
                                <option value="Completed">Completed</option>
                            </select>
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
                                defaultValue={ProjectDetails?.data?.descriptions}
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
                            Update
                        </button>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default ProjectUpdatePage