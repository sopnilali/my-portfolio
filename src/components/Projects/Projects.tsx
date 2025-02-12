import React from 'react'
import Link from 'next/link';
import { Tproject } from '@/types';
import SectionTitle from '../shared/SectionTitle';
import { ServerModuler } from '@/utils';
import ProjectCard from '../ui/ProjectCard';
const Projects = async() => {

    const allProjects = await ServerModuler.getAllProjects();

  return (
    <>
    <SectionTitle title='Featured Projects'/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {allProjects?.data.slice(0,4).map((project : Tproject, index : string)=> (
      <ProjectCard project={project} key={index}/>
    ))}
  </div>
  {allProjects?.data.length > 4 ? <div className='text-center my-8'>  <Link className='mb-0 text-2xl font-normal bg-teal-500 px-4 py-2 rounded-lg hover:shadow-md' href={'/projects'}>All Projects</Link></div> : ""}
  </>
  )
}

export default Projects