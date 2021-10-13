var express = require('express')
var dotenv = require('dotenv')
var cors = require('cors')
var {MongoClient} = require('mongodb')
var path = require('path')

const app = express();
app.use(cors());

dotenv.config()

app.use(express.json());

const port = process.env.PORT || 8000
app.use(express.static(
  path.join(__dirname, './client/build')));

app.listen(port, ()=>{
    console.log(`Server listening to port : ${port}`)
})

const url = 'mongodb+srv://User:1234@all-projects.6ehhc.mongodb.net/Portfolio?retryWrites=true&w=majority';
const client = new MongoClient(url);

const dbName = 'Portfolio';
const collections = ['Projects', 'Skills', 'Work', 'Social']

async function main() {
    await client.connect();
    const db = client.db(dbName);
    collections.map(async(singlecollection) => {
        const collection = db.collection(singlecollection);
        const findResult = await collection.find({}).toArray();
        app.use(`/${singlecollection}`, (req,res) => {
        res.send(findResult)
        })
    })
}

main()