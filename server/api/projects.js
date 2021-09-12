import express from 'express'
import ProjectsData from '../Data/Projects.js'

const Projects =express()

Projects.use('/', (req,res) => {
res.send(ProjectsData)
})

export default Projects

