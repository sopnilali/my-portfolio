import { Tproject } from '@/types';
import Link from 'next/link';
import React from 'react';



const ProjectCard = ({ project } : {project: Tproject}) => {

    console.log(project)

    return (
        <div data-aos="flip-left"  className=" rounded overflow-hidden shadow-lg p-6 m-4 bg-white">
            <img
                src={project?.image}
                alt={project?.title}
                width='500'
                height='500'
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <h1 className="font-bold text-xl mb-2 text-gray-800">
                <Link href={`/projects/${project._id}`}>
                    {project.title}
                </Link>
            </h1>
            <p className="text-gray-700 text-base">{project?.descriptions}</p>
            <div className="py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {project?.tools}
                </span>
            </div>
            <div className="flex items-center justify-between">
                <Link href={`${project?.githubfrontend.toLowerCase().replace(/\s/g, '-')}`} className="border py-2 px-2 bg-gray-600 hover:bg-gray-500 text-white rounded-full hover:text-white">Frontend Code</Link>
                <Link href={project.livelink} className="text-white border py-2 px-2 rounded-full bg-yellow-600 hover:bg-yellow-500  hover:text-white">Live Demo</Link>
                <Link href={`${project?.githubbackend.toLowerCase().replace(/\s/g, '-')}`} className="text-white border py-2 px-2 rounded-full bg-blue-600 hover:bg-blue-500  hover:text-white">Backend Code</Link>
            </div>
            <p className="text-sm text-gray-600 mt-4">Status: {project?.projectstatus}</p>
        </div>
    );
};

export default ProjectCard;