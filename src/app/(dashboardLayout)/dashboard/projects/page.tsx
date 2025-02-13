"use client"

import { Tproject } from '@/types';
import { ServerModuler } from '@/utils';
import Link from 'next/link';
import { toast } from 'sonner';
import Swal from 'sweetalert2';


const ProjectsPage = async() => {

  const projects = await ServerModuler.getAllProjects();
  
  const handleDeleteProject = async(id: string) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then( async(result) => {
        if (result.isConfirmed) {
          const res : any = await ServerModuler.deleteProject(id)
          if(res){
             toast.success('Project Delete Successfull', { duration: 2000 });
          }
        }
      })
  }


  return (
    <div>
      <div className="py-4 text-center">
        <h1 className="text-2xl font-bold text-teal-600">All Projects</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">S/N</th>
              <th className="border border-gray-300 p-2">Image</th>
              <th className="border border-gray-300 p-2">Title</th>
              <th className="border border-gray-300 p-2">Descriptions</th>
              <th className="border border-gray-300 p-2">Tools</th>
              <th className="border border-gray-300 p-2">Live Link</th>
              <th className="border border-gray-300 p-2">Duration</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects?.data?.length > 0 ? projects?.data.map((project: Tproject, index: string) => (
              <tr key={index} className="border border-gray-300 text-center">
                <td className="p-2">{index + 1}</td>
                <td className="p-2 ">
                  <img src={project.image} alt={project.title} className="w-16 h-16 mx-auto" />
                </td>
                <td className="p-2 text-left">{project.title}</td>
                <td className="p-2 text-left">{project.descriptions.length > 50
                  ? project.descriptions.slice(0, 50) + "..."
                  : project.descriptions}</td>
                <td className="p-2 text-left">{project.tools}</td>
                <td className="p-2 ">
                  <a href={project.livelink} className="text-green-500" target="_blank" rel="noopener noreferrer">Live Link</a>
                </td>
                <td className="p-2 text-left">{project.projectduration}</td>
                <td className="p-2 font-bold text-left" style={{ color: project.projectstatus === "Completed" ? "green" : "orange" }}>{project.projectstatus}</td>
                <td className="p-2 ">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2"><Link href={`/dashboard/projects/${project._id}`} >Update</Link>
                  </button>
                  <button onClick={() => handleDeleteProject(project._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                </td>
              </tr>
            )): <tr><td colSpan={8} className="text-center">No projects found</td></tr>  }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProjectsPage