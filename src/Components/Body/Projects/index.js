import React, { useState, useEffect } from 'react'
import ProjectData from '../../Data/Projects.json'
import './Projects.css'
import ProjectCard from './ProjectCard'
import GradientButton from '../../Common/Gradient-Button'

function Projects() {
    const [projects, setProjects] = useState([])
    const [loadMore, setloadMore] = useState(3)
    const [buttondisable, setbuttondisable] = useState(false)

    useEffect(() => {
        setProjects(ProjectData)
    }, [])
    const loadMoreProjects = () => {
        setloadMore(projects.length)
        setbuttondisable(true)
    }

    return (
        <div className='projects'>
            <label className='section-title'>Projects</label>
            {projects.slice(0, loadMore).map((project) => {
                return (
                    <ProjectCard project={project} key={project.title} />
                )
            })}
            <GradientButton
                buttonvalue={"Load More"}
                handleClick={loadMoreProjects}
                buttondisable={buttondisable}
            />
        </div>
    )
}

export default Projects
