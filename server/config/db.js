import { MongoClient } from 'mongodb'

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
console.log('mongodb running ')
  client.close();
});