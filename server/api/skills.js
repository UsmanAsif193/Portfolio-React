import express from 'express'
import SkillsData from '../Data/Skills.js'

const Skills =express()

Skills.use('/', (req,res) => {
res.send(SkillsData)
})

export default Skills

