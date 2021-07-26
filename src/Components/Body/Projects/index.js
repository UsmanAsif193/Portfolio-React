import React from 'react'
import { ProjectData } from '../../Data/Projects'
import './Projects.css'
import ProjectCard from './ProjectCard'
import Seperator from '../../Common/Seperator'

function Projects() {
    const data = ProjectData
    return (
        <div className='projects'>
            <Seperator />
            <label className='section-title'>Projects</label>
            {data.map((project) => { return <ProjectCard project={project} /> })}
        </div>
    )
}

export default Projects
