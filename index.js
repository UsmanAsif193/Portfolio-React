var express = require('express')
var dotenv = require('dotenv')
var cors = require('cors')
var {MongoClient} = require('mongodb')

const app = express();
app.use(cors());

dotenv.config()

app.use(express.json());

const port = process.env.PORT || 8000

app.use(express.static(path.join(__dirname, 'client/build')));
if(process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, 'client/build')));   
app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  })}
app.listen(port, ()=>{
    console.log(`server listening to port : ${port}`)
})

const url = process.env.MONGO_URI;
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