import React from 'react'
import { ProjectData } from '../../Data/Projects'
import './Projects.css'
import ProjectCard from './ProjectCard'

function Projects() {
    const data = ProjectData
    return (
        <div className='projects'>
            <label className='section-title'>Projects</label>
            {data.map((project) => { return <ProjectCard project={project} /> })}
        </div>
    )
}

export default Projects
