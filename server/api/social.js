import express from 'express'
import SocialData from '../Data/Social.js'

const Social =express()

Social.use('/', (req,res) => {
res.send(SocialData)
})

export default Social

