import React from 'react'
import { devProject, ProjectProps } from './projectDetails'
import ProjectCard from './ProjectCard'

const projectGrid = () => {
  return (
    <>
        <div className='grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1'>
            {devProject.map((project: ProjectProps) =>(
                    <ProjectCard 
                    id={project.id}
                    key={project.id}
                    name={project.name}
                    description={project.description}
                    technologies={project.technologies}
                    image={project.image}
                    available={project.available}
                    github={project.github}
                    />
                ))
            }
        </div>
    </>
  )
}

export default projectGrid