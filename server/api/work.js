import express from 'express'
import WorkData from '../Data/Work.js'

const Work =express()

Work.use('/', (req,res) => {
res.send(WorkData)
})

export default Work

