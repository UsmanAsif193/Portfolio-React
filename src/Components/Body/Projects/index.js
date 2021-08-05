import React, { useState, useEffect } from 'react'
import { ProjectData } from '../../Data/Projects'
import './Projects.css'
import ProjectCard from './ProjectCard'
import Seperator from '../../Common/Seperator'
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
    console.log(projects.length)
    console.log(loadMore)

    return (
        <div className='projects'>
            <Seperator />
            <label className='section-title'>Projects</label>
            {projects.slice(0, loadMore).map((project) => {
                return (
                    <>
                        <ProjectCard project={project} />
                    </>
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
