import React from 'react'
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiNodedotjs, SiRedux, SiTypescript } from 'react-icons/si';
import SectionTitle from './SectionTitle';


const skills = [
    { name: 'HTML', level: 90, icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { name: 'CSS', level: 90, icon: <FaCss3Alt size={40} className="text-blue-500" /> },
    { name: 'JavaScript', level: 80, icon: <FaJsSquare size={40} className="text-yellow-500" /> },
    { name: 'React', level: 90, icon: <FaReact size={40} className="text-cyan-400" /> },
    { name: 'Node.js', level: 80, icon: <SiNodedotjs size={40} className="text-green-500" /> },
    { name: 'Typescript', level: 75, icon: <SiTypescript size={40} className="text-blue-800" /> },
    { name: 'Redux', level: 60, icon: <SiRedux size={40} className="text-blue-800" /> },
  ];

const Skills = () => {



  return (
    <>
    <div className=" p-8 h-3/5">
        <SectionTitle title={'Skills'}/>
      <div className="space-y-8 max-w-4xl  mx-auto">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {skill.icon}
              <span className="text-xl font-medium">{skill.name}</span>
            </div>
            <div className="w-3/4 bg-gray-300 h-2 rounded-full">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="ml-4 text-sm font-semibold">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Skills