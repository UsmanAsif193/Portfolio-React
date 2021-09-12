import express from 'express'
import cors from 'cors'
import Projects from './api/projects.js'
import Work from './api/work.js'
import Skills from './api/skills.js'
import Social from './api/social.js'

const app = express();
app.use(cors());

app.use(express.json());

const port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`server listening to port : ${port}`)
})

app.get('/projects', Projects);
app.get('/skills', Skills);
app.get('/work', Work);
app.get('/social', Social);