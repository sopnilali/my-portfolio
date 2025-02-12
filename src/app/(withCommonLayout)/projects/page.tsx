
import ProjectCard from '@/components/ui/ProjectCard';
import { Tproject } from '@/types';
import { ServerModuler } from '@/utils'
import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
    title: 'Projects | MD Abdul Adud Portfolio',
    description: 'Discover all the latest projects from My Project, featuring the latest technological advancements and breakthroughs.'
  
}

const ProjectsPage = async() => {

  const allprojects = await ServerModuler.getAllProjects();

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {allprojects?.data.map((project : Tproject, index : string)=> (
      <ProjectCard project={project} key={index}/>
    ))}
  </div>
    </>
   
  )
}

export default ProjectsPage