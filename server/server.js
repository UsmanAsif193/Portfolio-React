import express from 'express'
import cors from 'cors'
import projects from './api/projects.route.js'


const app =express()


app.use(cors())
app.use(express.json())

app.use("/projects", projects)
app.use('*' , (req,res) => {res.status(404).json({error:'Not Found'})})

export default app