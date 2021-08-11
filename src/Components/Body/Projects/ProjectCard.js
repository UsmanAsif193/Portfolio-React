import React from 'react'
import './ProjectCard.css'
import { useDarkMode } from '../../../Context/DarkMode'

function ProjectCard({ project }) {
    const darkMode = useDarkMode()
    console.log(darkMode)
    return (
        <div className='project-card'>
            <div className="project-info">
                <label className="project-title">{project.title}</label>
                <div className="project-links">
                    {project.demo &&
                        <a target="_blank" rel="noopener noreferrer" href={project.demo} className="project-link">
                            <div className="link-button">
                                <i className="fi-rr-globe"></i>Demo
                            </div>
                        </a>}
                    {project.github &&
                        <a target="_blank" rel="noopener noreferrer" href={project.github} className="project-link">
                            <div className="link-button">
                                <i className="devicon-github-original colored"></i>Github
                            </div>
                        </a>}
                </div>
                <p>{project.about}</p>
                <div className="project-tags">
                    {project.tags.map((tag) => {
                        return (
                            <label key={tag} className={darkMode ? 'tag darktag' : 'tag'}>{tag}</label>
                        )
                    })}
                </div>
            </div>
            <img src={project.image} alt={project.title} className='project-photo' />
        </div>
    )
}

export default ProjectCard
